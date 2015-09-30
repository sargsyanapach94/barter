'use strict';
// Declare app level module which depends on views, and components
var my_app = angular.module('my_app', [
  'ngRoute', 
  'ngResource',
  'ui.bootstrap',
  'infinite-scroll',
  'ngCookies',
  'ui.bootstrap.datepicker',
  'ngFileUpload',
  'my_app.home',
  'my_app.category',
  'my_app.detals',
  'my_app.new_ad',
  'my_app.profile'
])
.controller('index_ctrl', function($scope, $location, $rootScope, ads_service, categories_service, fb_service, users_service, contacts_service, lg_service, locations_service) {
    $scope.ads_show = false;
    $scope.is_show_category = true;
    $scope.is_show_registration = false;
    $scope.new_search = '';
    $scope.country = "Armenia";

    if(!users_service.get_user()){
      $scope.log_button = true;
    };

    $rootScope.page_language_id = 1;

    lg_service.query()
      .$promise.then(function(data){
        $scope.all_languages = data;        
      });

    $scope.change_lg = function(val){
      $rootScope.page_language_id = val;
      
      if (val == 1) {
        $scope.country = "Armenia";
      }
      else{
        $scope.country = "Հայաստան";
      };

      get_categories($rootScope.page_language_id);

      return;
    };

    function get_categories(language){
      categories_service.query_translation(language)
        .$promise.then(function(data){
          $scope.tr_categories = data;
        });
    } 
    get_categories($rootScope.page_language_id);

    $scope.fb_login = function(){
      fb_service.login()
        .then(function(val){
          users_service.save_user(val);

          $location.path('/profile');
          $scope.log_button = false;  
        }, function(val){

          $scope.form_info = {};
          $scope.form_info.name = val.name;
          $scope.form_info.img_url = val.img_url;
          $scope.form_info.user_id = val.id;

          $scope.is_show_registration = true;
        });
    };

    $scope.fb_logout = function(){
      fb_service.logout()
        .then(function(val){
          users_service.delete_user();

          $location.path('/home');
          $scope.log_button = true; 
          $scope.is_show_registration = false; 
        },
        function(val){
          users_service.delete_user();

          $location.path('/home');
          $scope.log_button = true; 
          $scope.is_show_registration = false;
        }
        );
    };

    $scope.get_district = function(country){

      locations_service.query_trunslations($rootScope.page_language_id, country)
        .$promise.then(function(data){
          $scope.location = data;
        })
    }

    $scope.registration = function(data){
      var user = {
            name: data.name,
            birth_date: data.date,
            user_id: data.user_id,
            email: data.email,
            img_url: data.img_url
          },
          contacts = {
            email: data.email,
            user_id: data.user_id,
            phone: data.phone,
            city: data.city,
            location_id: data.location_id
          };

      users_service.save(user)
        .$promise.then(function(data){
          users_service.save_user(data);

          contacts_service.save({user_id: user.user_id} ,contacts);

          $location.path('/profile');
          $scope.log_button = false;
          $scope.is_show_registration = false;
        },function(err){
          $scope.form_info.email = null;
          $scope.email_warning = true;
        });
    };

    $scope.searsh_by_name = function (){
      ads_service.query({filter:{ where: {name: $scope.new_search} }})
        .$promise.then(function(ads) {
          if(ads.length == 0){
            $scope.ads_show = false;
          }else{
            $scope.found_ads = ads;
            $scope.ads_show = true;
          }
        });
    }; 

////////////////// date input
      var tomorrow, afterTomorrow;

      $scope.today = function() {
        $scope.date = new Date();
      };
      $scope.today();

      $scope.clear = function () {
        $scope.date = null;
      };
      
      $scope.open = function($event) {
        $scope.opened = true;
      };
    
      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[2];

      tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      afterTomorrow = new Date();
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
})
  .config( function($routeProvider) {
    function check_routing ($q, $location, users_service) {
      if (users_service.get_user()) {
          return true;
      } else {
          var defered = $q.defer();

          console.log('Please login or registration !!')

          $location.path('/');

          return defered.promise;
      };
    };
    $routeProvider
        .when('/home', {templateUrl: 'views/home/home.html',controller: 'home_ctrl'})
        .when('/detals/:id', {templateUrl: 'views/detals/detals.html',controller: 'detals_ctrl'})
        .when('/category/:id', {templateUrl: 'views/category/category.html',controller: 'category_ctrl'})
        .when('/new_ad', {templateUrl: 'views/new_ad/new_ad.html',controller: 'new_ad_ctrl',
          resolve: { factory: check_routing } })
        .when('/profile', {templateUrl: 'views/profile/profile.html',controller: 'profile_ctrl',
          resolve: { factory: check_routing } })
        .otherwise({redirectTo: '/home'});
  });

