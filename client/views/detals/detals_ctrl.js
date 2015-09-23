'use strict';

angular.module('my_app.detals', ['ngRoute'])

.controller('detals_ctrl', function($scope, $routeParams, ads_service) {
	$scope.id = $routeParams.id;

	ads_service.get({id:$scope.id})
		.$promise.then(function(data){
            $scope.ad_detals = data;

            ads_service.get({id:$scope.id, contacts:"contacts" })
            	.$promise.then(function(data){
            		$scope.contacts = data;
            	})
        });
});