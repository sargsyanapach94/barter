my_app.factory('lg_service', function($resource, $cookies) {
    var url = 'http://localhost:3000/onlineBarter/languages/:id/:translation';
    
    return $resource(url, {id: '@id', translation: '@translation'});
})