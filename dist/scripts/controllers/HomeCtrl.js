(function(){
    
    function HomeCtrl($scope, roomFactory, $uibModal){
        $scope.roomsList = roomFactory.all;
        
//        //change scope to another function
//        $scope.createRoomModal = function(){
//            //to open a popup window use the $uiModal.open method call
//            $uibModal.open({
//                //what do you want the modal to open up
//                //link to html for popup dialog
//                animation: true,
//                templateUrl:'/templates/modal.html',
//                controller: 'CreateRoomCtrl'
//            })
//     
//        };
//    }
        
        this.openModal = function(){
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                //function for modal    
                controller: function($scope, $uibModalInstance){
                    $scope.newRoom = {$value: ''};
                    
                    $scope.cancel = function() {
                        $uibModalInstance.dismiss('cancel');
                    };
                
                    $scope.create = function(){
                        $uibModalInstance.close($scope.newRoom);
                    };
                },
                size: 'md',
            });
            
            modalInstance.result.then(function(data){
               roomFactory.createRoom(data); 
            });
        
        };
    };
 
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'roomFactory', '$uibModal', HomeCtrl]);
 
 })();