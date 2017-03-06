(function (){
  function CreateRoomCtrl($scope, roomFactory, $uibModalInstance){
    //function to accept a room name entered by the user
    $scope.createRoom = function(name){
      if(name !== undefined){
        roomFactory.makeRoom({
          //create room by name and save the date of the room
          name: name,
          date: new Date()
        });
        $uibModalInstance.close();
      } else if (name === undefined){
        $uibModalInstance.close();
      }
    }

    $scope.cancelRoom = function(){
        $uibModalInstance.close();
    }
  }

  angular
    .module('blocChat')
    .controller('CreateRoomCtrl', ['$scope', 'roomFactory', '$uibModalInstance', CreateRoomCtrl]);
})();
