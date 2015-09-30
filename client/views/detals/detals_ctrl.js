'use strict';

angular.module('my_app.detals', ['ngRoute'])

.controller('detals_ctrl', function($scope, $rootScope, $routeParams, ads_service, locations_service) {
	$scope.id = $routeParams.id;

	ads_service.get({id:$scope.id})
		.$promise.then(function(data){
            $scope.ad_detals = data;

            ads_service.get({id:$scope.id, contacts:"contacts" })
            	.$promise.then(function(data){
            		$scope.contacts = data;

            		locations_service.query({filter:{where :{lg_id : $rootScope.page_language_id}}}, {id:data.location_id})
            		.$promise.then(function(loc){
            			$scope.contacts.country = loc[0].country;
            			$scope.contacts.district = loc[0].district;
            		})
            	})
        });
});