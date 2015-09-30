my_app.factory('contacts_service', function($resource) {
    var url = 'http://localhost:3000/onlineBarter/users/:user_id/contacts/:contact_id';

    return $resource(url, {user_id:"@user_id", contact_id:"@contact_id" });    
})