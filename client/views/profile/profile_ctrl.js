'use strict';

angular.module('my_app.profile', ['ngRoute'])

.controller('profile_ctrl', function ($scope, $rootScope, $routeParams, users_service, ads_service, contacts_service, locations_service) {
	$scope.user = users_service.get_user();
	  	
  	contacts_service.query({user_id: $scope.user.user_id})
    	.$promise.then(function(data){
    		$scope.contacts = data[0];

    		locations_service.query({filter:{where :{lg_id : $rootScope.page_language_id}}}, {id:data[0].location_id})
            		.$promise.then(function(loc){
            			$scope.contacts.country = loc[0].country;
            			$scope.contacts.district = loc[0].district;
            		})
    	});

	$scope.request = {
        service : users_service,
        id: {id: $scope.user.user_id, ads:"ads"}
    };

    ads_service.get({where: {user_name: $scope.user.name}}, {count: 'count'})
        .$promise.then(function(data){
            $scope.count = data.count;
        });
});
