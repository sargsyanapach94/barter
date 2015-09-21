myApp.factory('users_service', function($resource, $cookies) {
    var url = 'http://localhost:3000/onlineBarter/users/',
        my_cookies = $cookies.get('user');
        
    // services = {
    //     query: function() {
    //         return $http.get(url); 
    //     },
    //     get: function(id) {
    //         return $http.get(url + 'findOne?filter[where][user_id]=' + id);
    //     },
    //     post: function(data){
    //         return $http.post(url,data)
    //     },
    var resource = $resource(url);

        resource.save_user = function(user_info) {
            $cookies.putObject('user',user_info)
            return user_info; 
        };
        resource.get_user = function(){
            return $cookies.getObject('user');
        };
        resource.delete_user = function(){
          $cookies.remove('user');
        };
    // };
    
    return resource;    
})