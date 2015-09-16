myApp.factory('categories_service', function($http) {
    var url = 'http://localhost:3000/onlineBarter/categories/',

    services = {
        query: function() {
            return $http.get(url); 
        },
        get: function(id) {
            return $http.get(url + id);
        }
    };
    
    return services;    
})