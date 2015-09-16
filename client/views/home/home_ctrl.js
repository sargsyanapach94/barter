'use strict';

angular.module('my_app.home', ['ngRoute'])

.controller('home_ctrl', function($scope, ads_service) {

	var options = [
				{
				name:'[limit]',
				value:'4'
				}];

    ads_service.filter(options).success(function(data){
    	$scope.ads = data;
    });
    
});

     
