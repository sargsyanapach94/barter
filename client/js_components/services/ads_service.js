myApp.factory('ads_service', function($http) {
    var url = 'http://localhost:3000/onlineBarter/ads/',

    services = {
        query: function() {
            return $http.get(url + '?filter[order]=date%20DESC'); 
        },
        get: function(id) {
            return $http.get(url + id);
        },
        filter: function(options){
            var url_tail = '';

            if(options && options.length){
                for(var i=0; i<options.length; i++){
                    url_tail += 'filter' + options[i].name + '=' + options[i].value + '&';
                };
             url_tail = url_tail + 'filter[order]=date%20DESC';
             
                return $http.get(url + '?' + url_tail);
            }
            else {
                throw new Error("Bad request");
            }
        },
        post: function(data){
            return $http.post(url,data)
        },
        delete: function(id) {
            return $http.delete(url + id);
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
        // }
    };
    
    return services;    
})