'use strict';

angular.module('my_app.detals', ['ngRoute'])

.controller('detals_ctrl', function($scope, $routeParams, ads_service, contacts_service, regions_service, users_service) {
	$scope.id = $routeParams.id;

	ads_service.get($scope.id)
		.success(function(data){
			$scope.ad_detals = data;

			contacts_service.get(data.contacts_kay)
				.success(function(data){
					$scope.ad_detals.city = data.city;
					$scope.ad_detals.email = data.email;

					regions_service.get(data.region_kay)
						.success(function(data){
							$scope.ad_detals.country = data.country;
							$scope.ad_detals.district = data.district;
						});
					users_service.get($scope.ad_detals.user_id)
						.success(function(data){
							$scope.ad_detals.user = data;
						});
				});
		});
});