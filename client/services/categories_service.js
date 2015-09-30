my_app.factory('categories_service', function($resource, lg_service) {
    var url = 'http://localhost:3000/onlineBarter/categories/:id',
    	resource = $resource(url, {id: '@id'});

    	resource.query_translation = function(lg){
    		return	lg_service.query({id: lg, translation: 'tr_categories'})
    	},

    	resource.get_translation = function(lg, id){
    		return	lg_service.query({filter: {where: {category_id: id}}}, {id: lg, translation: 'tr_categories'})
    	}

    return resource;    
})