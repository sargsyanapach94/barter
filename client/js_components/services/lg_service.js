myApp.factory('lg_service', function($resource, $cookies) {
    var url = 'http://localhost:3000/onlineBarter/languages/',
        cooki = $cookies.get('app_lg'),
        resource = $resource(url),

        services = {
            query: function() {

                return $http.get(url); 
            },
            get: function() {
                return $cookies.getObject('app_lg');
            },
            post: function(data){
                $cookies.putObject('app_lg',data);
                return data;
            }
        };
    
    return resource;    
})