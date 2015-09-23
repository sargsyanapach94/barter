myApp.directive('adsList', function () {
    return {      
        restrict: 'AEC',
        templateUrl:'js_components/directives/items_list.html',
        transclude: true,
        replace:false,
        link: function ($scope, el, attrs) {
            $scope.del_btn = false;
            
            if(attrs.deleteButton && attrs.deleteButton === 'true'){
                $scope.del_btn = true;
            }
        },
    }    
});

