'use strict';

angular.module('my_app.category', ['ngRoute'])

.controller('category_ctrl', function($scope, $routeParams, ads_service, categories_service) {
	
    $scope.category = '' + $routeParams.id;
    
    ads_service.query({filter:{where:{category_kay: $scope.category }, order :"date DESC" }})
        .$promise.then(function(data){
            $scope.ads = data;
        });
    
});

     
