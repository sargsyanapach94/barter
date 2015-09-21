'use strict';

angular.module('my_app.profile', ['ngRoute'])

.controller('profile_ctrl', function($scope, $rootScope, $routeParams, users_service, ads_service, contacts_service, regions_service ) {
	
	$scope.user = users_service.get_user();

  	ads_service.query({filter:{where:{user_id: $scope.user.user_id}, order :"date DESC"}})
	  	.$promise.then(function(data){
	  		$scope.ads = data;
	  	});
	  	
  	contacts_service.query({filter:{where:{email: $scope.user.contacts_kay}}})
    	.$promise.then(function(data){
    		$scope.contacts = data[0];
    	});

	$scope.delete = function(id){
		ads_service.remove({id: id})
			.$promise.then(function(data){
				ads_service.query({filter:{where:{user_id: $scope.user.user_id}}})
				  	.$promise.then(function(data){
				  		$scope.ads = data;
				  	});
			})
	};
});

    