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
        },
        // making save dual-function like default ngResource behavior (no separate update w/PUT)
        // save: function(url,newData) {
        //     if(url ==='/user/'){
        //         return $http.post('/profile', newData);            
        //     };

        //     if(url==='/adds'){
        //         return $http.post('/object', newData);
        //     };
        // },
        // edit: function( newData){
        //     return $http.post('/object/edit', newData);
        // },
        // search: function(name){
        //     return $http.get('/search/' + name);
        // },
        // delete: function(id) {
        //     return $http.delete('/games/' + id);
        // }
    };
    
    return services;    
})