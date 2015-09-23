'use strict';

angular.module('my_app.profile', ['ngRoute'])

.controller('profile_ctrl', function($scope, $rootScope, $routeParams, users_service, ads_service, contacts_service) {
	
	$scope.user = users_service.get_user();

  	users_service.query({filter:{order :"date DESC"}},{id: $scope.user.user_id, ads:"ads"})
	  	.$promise.then(function(data){
	  		$scope.ads = data;
	  	});
	  	
  	contacts_service.query({user_id: $scope.user.user_id})
    	.$promise.then(function(data){
    		$scope.contacts = data[0];
    	});

	$scope.delete = function(id){
		users_service.remove({id: $scope.user.user_id, ads:"ads", ad_id: id})
			.$promise.then(function(data){
				users_service.query({filter:{order :"date DESC"}}, {id: $scope.user.user_id, ads:"ads"})
				  	.$promise.then(function(data){
				  		$scope.ads = data;
				  	});
			})
	};
});

    