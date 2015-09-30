'use strict';

angular.module('my_app.new_ad', ['ngRoute'])

.controller('new_ad_ctrl', function($scope, $routeParams, $location, users_service, ads_service, categories_service, contacts_service) {
	$scope.user = users_service.get_user();
	$scope.ad = {
			date: new Date(),
			email: $scope.user.email,
			user_id: $scope.user.user_id,
			user_name: $scope.user.name
		};

	contacts_service.query({user_id: $scope.user.user_id})
		.$promise.then(function(data){
			$scope.ad.phone = data[0].phone;
		});
	      
	$scope.save_ad = function(){
		// $scope.ad.image = $scope.img_src;

		users_service.save({id: $scope.user.user_id, ads:"ads"} ,$scope.ad)
			.$promise.then(function(data){
				$location.path('/profile');
			},
			function(err){
				console.log(err)
			})
	};
});

     
