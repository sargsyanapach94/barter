'use strict';

angular.module('my_app.home', ['ngRoute'])

.controller('home_ctrl', function($scope, $http, ads_service) {

	var options = [
				// {
				// name:'[order]',
				// value: 'date%20DESC'
				// },
					{
				name:'[limit]',
				value:'4'
				}];

    ads_service.filter(options).success(function(data){
    	$scope.ads = data;
    });
    
});

     
