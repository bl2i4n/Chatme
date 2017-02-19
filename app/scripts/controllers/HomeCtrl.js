(function(){
    
    function HomeCtrl($scope, roomFactory, $uibModal){
        $scope.roomsList = roomFactory.all;
        
        //change scope to another function
        $scope.createRoomModal = function(){
            //to open a popup window use the $uiModal.open method call
            $uibModal.open({
                //what do you want the modal to open up
                //link to html for popup dialog
                templateUrl:'/templates/modal.html',
                controller: 'CreateRoomCtrl'
            })
     
        };
            
    }
 
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'roomFactory', '$uibModal', HomeCtrl]);
 
 })();