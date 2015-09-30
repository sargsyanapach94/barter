my_app.factory('ads_service', function($http, $resource) {
    var url = 'http://localhost:3000/onlineBarter/ads/:id/:contacts/:users/:count';

	return $resource(url, {id:'@id', contacts: '@contacts', users: '@users', count: '@count'});
})