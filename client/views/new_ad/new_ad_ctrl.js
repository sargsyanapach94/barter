'use strict';

angular.module('my_app.new_ad', ['ngRoute'])

.controller('new_ad_ctrl', function($scope, $routeParams, $location, users_service, ads_service, categories_service, contacts_service) {
	$scope.user = users_service.get_user();
	$scope.ad = {
			date: new Date(),
			contacts_kay: $scope.user.contacts_kay,
			user_id: $scope.user.user_id,
		};

	contacts_service.get($scope.user.contacts_kay)
		.success(function(data){
			$scope.contacts = data;
			$scope.ad.phone = data.phone;
		});
	categories_service.query()
	    .success(function(data){
	        $scope.categories = data;
	    });


      
	$scope.save_ad = function(){
		$scope.ad.image = $scope.img_src;

		ads_service.post($scope.ad)
			.success(function(data){
				$location.path('/profile');
			})
			.error(function(data){
				console.log(data)
			})
	};
});

     
