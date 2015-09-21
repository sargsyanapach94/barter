myApp.factory('ads_service', function($http, $resource) {
    var url = 'http://localhost:3000/onlineBarter/ads/:id';
    
    return resource = $resource(url, {id:"@id"});
})