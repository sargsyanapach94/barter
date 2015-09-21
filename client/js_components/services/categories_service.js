myApp.factory('categories_service', function($resource) {
    var url = 'http://localhost:3000/onlineBarter/categories';
    var resource = $resource(url);

    var services = {
        query: function() {
            
                // return $http.get(url + '?filter[where][lg_id]=' + (lg || '1'))
            
            return $http.get(url); 
        },
        get: function(id) {
            return $http.get(url + id);
        }
    };
    
    return resource;    
})