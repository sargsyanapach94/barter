my_app.directive('adsList', function () {
    return {      
        restrict: 'AEC',
        templateUrl:'directives/items_list/items_list.html',
        transclude: true,
        replace:false,
        scope: {
                adsRequest: '=',
                count: '='
                },
        link: function ($scope, el, attrs) {
            var i = 0, 
                service = $scope.adsRequest.service,
                filter = $scope.adsRequest.filter,
                id = $scope.adsRequest.id;
            $scope.ads = [];

            $scope.get_ads = function(){
                if(!$scope.ads.length){
                    service.query({filter:{limit: 4, offset: 0, where : filter}}, id)
                        .$promise.then(function(data){
                            if(data.length){
                                $scope.ads = $scope.ads.concat(data);
                                i = i + 4;
                            }
                            else{
                                $scope.empti_data = 'There is no any ads from this category.';
                            }
                        });
                }else{
                    if($scope.ads.length < $scope.count){
                        service.query({filter:{limit: 1, offset: i++, where : filter}}, id)
                            .$promise.then(function(data){
                                $scope.ads = $scope.ads.concat(data);
                            });
                    };
                }; 
            };

            $scope.del_btn = false;
            
            if(attrs.deleteButton && attrs.deleteButton === 'true'){
                $scope.del_btn = true;
            };

            $scope.delete = function(ad_id){
                var element = $(event.target).parents('tr');

                service.remove({id: id.id, ads: id.ads, ad_id: ad_id})
                    .$promise.then(function(data){
                        element.remove();
                        console.log("removed")
                    })
            };
        },
    }    
});

