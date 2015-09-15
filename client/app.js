'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('my_app', [
  'ngRoute', 
  'ui.bootstrap',
  'ngCookies',
  'ui.bootstrap.datepicker',
  // 'ezfb',
  // 'ngFacebook',
  'ngFileUpload',
  'my_app.home',
  'my_app.category',
  'my_app.detals',
  'my_app.new_ad',
  'my_app.profile'
])
.controller('index_ctrl', function($scope, $location, $cookies, $q, ads_service, categories_service, fb_service, users_service, regions_service, contacts_service) {
    //var def_in = $q.defer() ,def_out = $q.defer();
    $scope.ads_show = false;
    $scope.is_show_category = true;
    $scope.is_show_registration = false;
    $scope.new_search = '';
    

    if(!users_service.get_user()){
      $scope.log_button = true;
    }

    $scope.fb_login = function(){
       $scope.is_show_registration = false;

      fb_service.login()
        .then(function(val){
          users_service.save_user(val);

          $location.path('/profile');
          $scope.log_button = false;  
        }, function(val){

          console.log(val)
          $scope.form_info = {};
          $scope.form_info.name = val.name;
          $scope.form_info.img_url = val.img_url;
          $scope.form_info.user_id = val.id;

          $scope.is_show_registration = true;
        });
      // fb_service.get_picture()
      //   .then(function(data){
      //     $scope.form_info = {}|| $scope.form_info;
      //     console.log(data)
      //     $scope.img_url = data.url;
      //   })
    };

    $scope.fb_logout = function(){
        fb_service.logout()
          .then(function(val){
            users_service.delete_user();

            $location.path('/home');
            $scope.log_button = true; 
            $scope.is_show_registration = false; 
          });
    };

    $scope.registration = function(data){

      var user = {
            name: data.name,
            birth_date: data.date,
            user_id: data.user_id,
            contacts_kay: data.email,
            img_url: data.img_url
          },
          contacts = {
            email: data.email,
            phone: data.phone,
            city: data.city,
            region_kay: data.district
          };

      contacts_service.post(contacts);
      users_service.post(user)
        .success(function(data){
          users_service.save_user(data);

          $location.path('/profile');
          $scope.log_button = false;
          $scope.is_show_registration = false;
        });
    };

    
    categories_service.query()
      .success(function(data){
        $scope.categories = data;
      });
    regions_service.query('?filter[where][country]=Armenia')
      .success(function(data){
       $scope.districts = data;
      });

    $scope.searsh_by_name = function (){
      var options = [{
                  name: '[where][name]',
                  value: $scope.new_search
              }]
      ads_service.filter(options)
            .success(function(data){
                if(data.length == 0){
                  $scope.ads_show = false;
                }else{
                  $scope.found_ads = data;
                  $scope.ads_show = true;
                }
            });
      }; 



////////////////// date
  //(function(){
      $scope.today = function() {
        $scope.date = new Date();
      };
      $scope.today();

      $scope.clear = function () {
        $scope.date = null;
      };

      // Disable weekend selection
      // $scope.disabled = function(date, mode) {
      //   return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
      // };
      
      $scope.open = function($event) {
        $scope.opened = true;
      };
    
      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[2];

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date();
      afterTomorrow.setDate(tomorrow.getDate() + 2);
      $scope.events =
        [
          {
            date: tomorrow,
            status: 'full'
          },
          {
            date: afterTomorrow,
            status: 'partially'
          }
        ];

      $scope.getDayClass = function(date, mode) {
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0,0,0,0);

          for (var i=0;i<$scope.events.length;i++){
            var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

            if (dayToCheck === currentDay) {
              return $scope.events[i].status;
            }
          }
        }

        return '';
      };
  //}());

})
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home/', {templateUrl: 'views/home/home.html',controller: 'home_ctrl'})
        .when('/detals/:id', {templateUrl: 'views/detals/detals.html',controller: 'detals_ctrl'})
        .when('/category/:id', {templateUrl: 'views/category/category.html',controller: 'category_ctrl'})
        .when('/new_ad/', {templateUrl: 'views/new_ad/new_ad.html',controller: 'new_ad_ctrl'})
        .when('/profile/', {templateUrl: 'views/profile/profile.html',controller: 'profile_ctrl'})
        .otherwise({redirectTo: '/home/'});
  }]);

     
 