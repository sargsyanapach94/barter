myApp.directive('fileUpload', function () {
    return {      
        restrict: 'AEC',
        template:'<input id="input" type="file" multiple="true" />'+
                    '<div id="new_images" >'+
                        // '<div >Loaded {{imgQuont}}</div>'+
                    '</div>',
         
        replace:false,
        link: function ($scope, el, attrs) {
            $scope.imgs = [];

            $('#input').on('change',function(event){
                var files = $(event.target)[0].files,
                    file, fileReader, img;
                   

                for(var i=0; i < files.length; i++){
                    file = files[i];
                    console.log(file)
                    
                    // Если в файле содержится изображение
                    if(/image.*/.test(file.type)){

                        $('#new_images').append('<div id="box"></div>');

                        fileReader = new FileReader();

                        fileReader.onload = function(event) {
                                img = new Image();
                                img.src = event.target.result;
                                            
                                    
                                if(img.complete) {
                                    //$scope.img_src = JSON.stringify($(img)) ;

                                    $scope.imgs.push(img.src);
                                    $('#box').append(img);
                                }
                            };
                        fileReader.readAsDataURL(file);
                        fileReader.onloadend = function(event) {
                                console.log(event)
                            };
                    }
                    else{
                        alert("It's not a image. Please try again");
                    }
                }
            })
        },
    }    
});