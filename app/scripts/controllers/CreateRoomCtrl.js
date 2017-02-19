probably can do in roomFactory
(function(){
   function CreateRoomCtrl($scope, roomFactory, $uibModalInstance){
       //use $scope to share a variable throughout the app
       $scope.createRoom = function(name){
           
           //use roomFactory to create a room
           //create a makeRoom object to hold the name of the room and the date of when it was created
           roomFactory.makeRoom({
               name: name,
               date: new Date()
           });
           $uibModalInstance.close(); //close room when done
       }
       
       //use scope to also cancel a room
       $scope.closeRoom = function() {
           $uibModalInstance.close();
       }
       
   }
    
    angular
        .module('blocChat')
        .controller('CreateRoomCtrl', ['$scope', 'roomFactory', '$uibModalInstance' CreateRoomCtrl])
    
});