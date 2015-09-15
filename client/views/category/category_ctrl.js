'use strict';

angular.module('my_app.category', ['ngRoute'])

.controller('category_ctrl', function($scope, $http, $routeParams, ads_service, categories_service) {
	$scope.category_kay = $routeParams.id;

	var options = [{
				name:'[where][category_kay]',
				value: $scope.category_kay
				},
                // {
                // name:'[order]',
                // value: 'date%20DESC'
                // }
                ];

    categories_service.get($scope.category_kay).success(function(data){
    	$scope.category = data.name;
    });
    ads_service.filter(options).success(function(data){
        $scope.ads = data;
    });
    
});

     
