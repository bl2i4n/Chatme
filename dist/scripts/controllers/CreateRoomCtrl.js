(function (){
  function CreateRoomCtrl($scope, roomFactory, $uibModalInstance){
    $scope.createRoom = function(name){
      if(name !== undefined){
        roomFactory.makeRoom({
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
