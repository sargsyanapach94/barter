myApp.factory('contacts_service', function($http) {
    var url = 'http://localhost:3000/onlineBarter/contacts/',

    services = {
        query: function() {
            return $http.get(url); 
        },
        get: function(id) {
            return $http.get(url + 'findOne?filter[where][email]='+ id);
        },
        post: function(data){
            return $http.post(url,data)
        }
    };
    
    return services;    
})