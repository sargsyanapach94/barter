my_app.factory('locations_service', function($resource, lg_service) {
    var url = 'http://localhost:3000/onlineBarter/locations/:id/tr_locations',
    	resource = $resource(url, {id:"@id"});

    	resource.query_trunslations = function(lg, country){
    		return	lg_service.query({filter: {where: {country: country}}}, {id: lg, translation: 'tr_locations'})
    	}

    return resource;
})