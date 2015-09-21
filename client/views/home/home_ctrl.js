'use strict';

angular.module('my_app.home', ['ngRoute'])

.controller('home_ctrl', function($scope, ads_service) {
    
    ads_service.query({ filter: {limit:'10', order :"date DESC"} })
	    .$promise.then(function(ads) {
	        $scope.ads = ads;
	    });
});

     
