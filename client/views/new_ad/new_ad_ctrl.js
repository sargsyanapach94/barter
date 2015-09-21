'use strict';

angular.module('my_app.new_ad', ['ngRoute'])

.controller('new_ad_ctrl', function($scope, $routeParams, $location, users_service, ads_service, categories_service, contacts_service) {
	$scope.user = users_service.get_user();
	$scope.ad = {
			date: new Date(),
			contacts_kay: $scope.user.contacts_kay,
			user_id: $scope.user.user_id,
			user_name: $scope.user.name
		};

	contacts_service.query({filter:{where:{email: $scope.user.contacts_kay}}})
		.$promise.then(function(data){
			$scope.contacts = data;
			$scope.ad.phone = data.phone;
		});
	categories_service.query()
	    .$promise.then(function(data){
	        $scope.categories = data;
	    });


      
	$scope.save_ad = function(){
		$scope.ad.image = $scope.img_src;

		ads_service.save($scope.ad)
			.$promise.then(function(data){
				console.log(data)
				$location.path('/profile');
			},
			function(data){
				console.log(data)
			})
	};
});

     
