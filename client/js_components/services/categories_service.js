myApp.factory('categories_service', function($resource) {
    var url = 'http://localhost:3000/onlineBarter/categories';
    var resource = $resource(url);

    return resource;    
})