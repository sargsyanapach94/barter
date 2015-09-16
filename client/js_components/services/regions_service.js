myApp.factory('regions_service', function($http) {
    var url = 'http://localhost:3000/onlineBarter/regions/',

    services = {
        query: function(options) {
            return $http.get(url + options); 
        },
        get: function(id) {
            return $http.get(url + id);
        }
    };
    
    return services;    
})