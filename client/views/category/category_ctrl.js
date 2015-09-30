'use strict';

angular.module('my_app.category', ['ngRoute'])

.controller('category_ctrl', function($scope, $rootScope, $routeParams, ads_service, categories_service) {
    $scope.id = '' + $routeParams.id;
    
    categories_service.get_translation($rootScope.page_language_id , $scope.id)
        .$promise.then(function(data){
          $scope.category = data[0].name;
        });

    $scope.request = {
        service : ads_service,
        filter : {category_id: $scope.id }
    };

    ads_service.get({where: {category_id: $scope.id}}, {count: 'count'})
        .$promise.then(function(data){
            $scope.count = data.count;
        });
});

     
