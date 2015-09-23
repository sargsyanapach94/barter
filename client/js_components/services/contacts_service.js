myApp.factory('contacts_service', function($resource) {
    var url = 'http://localhost:3000/onlineBarter/users/:user_id/contacts/:contact_id',
        resource = $resource(url, {user_id:"@user_id", contact_id:"@contact_id" });
    
    resource.exists = $resource('http://localhost:3000/onlineBarter/contacts/:id/exists', {id:"@id"})

    return resource;    
})