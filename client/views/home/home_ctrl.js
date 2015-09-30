'use strict';

angular.module('my_app.home', ['ngRoute'])

.controller('home_ctrl', function($scope, ads_service) {

	$scope.request = {
		service : ads_service
	};

	ads_service.get({count: 'count'})
		.$promise.then(function(data){
			$scope.count = data.count;
		});
});

     
