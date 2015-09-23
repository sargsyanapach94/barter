myApp.factory('users_service', function($resource, $cookies) {
    var url = 'http://localhost:3000/onlineBarter/users/:id/:ads/:ad_id',
        my_cookies = $cookies.get('user'),
    
        resource = $resource(url, {id:"@id", ads:"@ads" , ad_id:"@ad_id" });

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

    return resource;    
})