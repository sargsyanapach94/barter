'use strict';

angular.module('my_app.profile', ['ngRoute'])

.controller('profile_ctrl', function($scope, $routeParams, users_service, ads_service, contacts_service, regions_service ) {
	var options;
	$scope.user = users_service.get_user();

  	options = [{
				name: '[where][user_id]',
				value: $scope.user.user_id
				}];

  	ads_service.filter(options)
	  	.success(function(data){
	  		$scope.ads = data;
	  	});
	  	
  	contacts_service.get($scope.user.contacts_kay)
  		.success(function(data){
			$scope.contacts = data;

			regions_service.get(data.region_kay)
				.success(function(data){
					$scope.contacts.country = data.country;
					$scope.contacts.district = data.district;
				});
		});

	$scope.delete = function(id){
		ads_service.delete(id).success(function(){
			ads_service.filter(options)
			  	.success(function(data){
			  		$scope.ads = data;
			  	});
		})
	};
});

    