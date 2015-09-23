'use strict';
// Declare app level module which depends on views, and components
var myApp = angular.module('my_app', [
  'ngRoute', 
  'ngResource',
  'ui.bootstrap',
  'ngCookies',
  'ui.bootstrap.datepicker',
  'ngFileUpload',
  'my_app.home',
  'my_app.category',
  'my_app.detals',
  'my_app.new_ad',
  'my_app.profile'
])
.controller('index_ctrl', function($scope, $location, $rootScope, ads_service, categories_service, fb_service, users_service, contacts_service) {
    $scope.ads_show = false;
    $scope.is_show_category = true;
    $scope.is_show_registration = false;
    $scope.new_search = '';
    $scope.page_lg_id = '';

    if(!users_service.get_user()){
      $scope.log_button = true;
    };


//     lg_service.query()
//       .success(function(data){
//         var cookie = lg_service.get();
//         $scope.lg = data;
// console.log(cookie)

//         cookie ? $scope.change_lg(cookie.id) : $scope.change_lg(1);
        
//       });

    // $scope.change_lg = function(val){
    //   console.log(val)
    //   for(var i=0; i<$scope.lg.length; i++){
    //     if(''+val == $scope.lg[i].id){
    //       lg_service.post($scope.lg[i]);

    //       categories_service.query(val)
    //       .success(function(data){
    //         $scope.categories = data;
    //       });

    //       $location.path($location.path() + '');
    //       return;
    //     }
    //   }
    // };

    categories_service.query()
      .$promise.then(function(data){
        $scope.categories = data;
      });
    
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
            district: data.district,
            country: data.country
          };

      users_service.save(user)
        .$promise.then(function(data){
          users_service.save_user(data);

          contacts_service.save({user_id: user.user_id} ,contacts);

          $location.path('/profile');
          $scope.log_button = false;
          $scope.is_show_registration = false;
        });
    };

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      var user = users_service.get_user(),
          url = 'http://localhost:3000/index.html#/';

      if(!user && (next == (url + 'profile') || next == (url + 'new_ad'))){
        $location.path(current.split('#')[1])
      };
    });

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

    $scope.verify_email = function(data){
      contacts_service.exists.get({id:data})
        .$promise.then(function(res){
          if(res.exists){
            $scope.form_info.email = null;
            $scope.email_warning = true;
          }
          else{
            $scope.email_warning = false;
          }
        })
    }

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
    //add controller
    $routeProvider
        .when('/home', {templateUrl: 'views/home/home.html',controller: 'home_ctrl'})
        .when('/detals/:id', {templateUrl: 'views/detals/detals.html',controller: 'detals_ctrl'})
        .when('/category/:id', {templateUrl: 'views/category/category.html',controller: 'category_ctrl'})
        .when('/new_ad', {templateUrl: 'views/new_ad/new_ad.html',controller: 'new_ad_ctrl'})
        .when('/profile', {templateUrl: 'views/profile/profile.html',controller: 'profile_ctrl'})
        .otherwise({redirectTo: '/home'});
  });