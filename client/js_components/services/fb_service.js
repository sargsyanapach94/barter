myApp.factory('fb_service', function($http, $cookies, $q, users_service) {
    var my_cookies = $cookies.get('user');

    window.fbAsyncInit = function() {
        FB.init({
          appId      : '721915827913777',
          status     : true, 
          cookie     : true,
          xfbml      : true,
          version    : 'v2.4'
        });
        //services.fb = FB;
      };

    (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = '//connect.facebook.net/en_US/sdk.js';
         fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function get_picture(){
      var def = $q.defer();

      FB.api("/me/picture",
        function (response) {
          if (response && !response.error) {
            def.resolve(response.data);
          }
        }
      );

      return def.promise;
    };

    services = {
        login: function(){
          var def = $q.defer();

          FB.login(function(res) {
             if (res.status == 'connected') {
                users_service.get(res.authResponse.userID)
                  .success(function(data) {
                    def.resolve(data);
                  })
                  .error(function(data){
                    FB.api('/me',function(data){
                      get_picture()
                        .then(function(img){
                          data.img_url = img.url;
                          def.reject(data);
                        })
                      
                    })
                  }) 
             } 
             else {
               console.log('User cancelled login or did not fully authorize.');
             }
           });

          return def.promise;
        },
        logout: function(){
          var def = $q.defer();

          FB.logout(function(res){
            def.resolve('logout');
          });

          return def.promise;
        },
        get_picture: get_picture,
      };
    
    return services;    
})