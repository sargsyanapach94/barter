my_app.factory('fb_service', function($q, users_service) {

    window.fbAsyncInit = function() {
        FB.init({
          appId      : '721915827913777',
          status     : true, 
          cookie     : true,
          xfbml      : true,
          version    : 'v2.4'
        });
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
                users_service.get({id: res.authResponse.userID})
                  .$promise.then(function(data) {
                    if(data){
                      def.resolve(data);
                    }
                  },
                  function(err){
                    console.log(err);

                    FB.api('/me',function(data){
                      get_picture()
                        .then(function(img){
                          data.img_url = img.url;
                          def.reject(data);
                        })
                      
                    });
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
          });

            def.resolve('logout');
          return def.promise;
        },
        get_picture: get_picture,
        get_login_status: function(){
          var def = $q.defer();

          FB.getLoginStatus(function(res) {
            def.resolve(res);            
           });

          return def.promise;
        },
      };
    
    return services;    
})