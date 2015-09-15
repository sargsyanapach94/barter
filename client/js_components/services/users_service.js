myApp.factory('users_service', function($http, $cookies) {
    var url = 'http://localhost:3000/onlineBarter/users/',

    services = {
        query: function() {
            return $http.get(url); 
        },
        get: function(id) {
            return $http.get(url + 'findOne?filter[where][user_id]=' + id);
        },
        post: function(data){
            return $http.post(url,data)
        },
        
        save_user: function(user_info) {
            $cookies.putObject('user',user_info)
            return user_info; 
        },
        get_user: function(){
            return $cookies.getObject('user');
        },
        delete_user: function(){
          $cookies.remove('user');
        },
    };
    
    return services;    
})