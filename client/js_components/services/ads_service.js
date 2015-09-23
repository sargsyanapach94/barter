myApp.factory('ads_service', function($http, $resource) {
    var url = 'http://localhost:3000/onlineBarter/ads/:id/:contacts/:users';
    
    return resource = $resource(url, {id:"@id", contacts: "@contacts", users: "@users"});
})