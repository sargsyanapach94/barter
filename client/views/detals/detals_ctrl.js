'use strict';

angular.module('my_app.detals', ['ngRoute'])

.controller('detals_ctrl', function($scope, $routeParams, ads_service, contacts_service) {
	$scope.id = $routeParams.id;

	ads_service.get({id:$scope.id})
		.$promise.then(function(data){
            $scope.ad_detals = data;

            contacts_service.query({filter:{where:{email: data.contacts_kay}}})
            	.$promise.then(function(data){
            		$scope.contacts = data[0];
            	})
        });

		// .success(function(data){
		// 	$scope.ad_detals = data;

		// 	contacts_service.get(data.contacts_kay)
		// 		.success(function(data){
		// 			$scope.ad_detals.city = data.city;
		// 			$scope.ad_detals.email = data.email;

		// 			regions_service.get(data.region_kay)
		// 				.success(function(data){
		// 					$scope.ad_detals.country = data.country;
		// 					$scope.ad_detals.district = data.district;
		// 				});
		// 			users_service.get($scope.ad_detals.user_id)
		// 				.success(function(data){
		// 					$scope.ad_detals.user = data;
		// 				});
		// 		});
		// });
});