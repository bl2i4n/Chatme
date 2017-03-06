(function(){

    function HomeCtrl($scope, roomFactory, $uibModal, Message, $cookies){
        $scope.roomsList = roomFactory.all;
        $scope.messages = {};
        $scope.currentRoom = null;
        $scope.currentUser = $cookies.get('blocChatCurrentUser');


        //sets the current room to the one clicked
        $scope.setCurrentChatRoom = function(room){
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId(room.$id);

        };

        $scope.addRoomModal = function(){
          $uibModal.open({
            animation:true,
            templateUrl: '/templates/modal.h\tml',
            controller: 'CreateRoomCtrl'
          })
        };


        $scope.sendMessage = function(room){
          Message.send($scope.newMessage, room.$id);
          console.log($scope.newMessage);
          $scope.newMessage = null;
        };
      }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'roomFactory', '$uibModal', 'Message', '$cookies', HomeCtrl]);

 })();
