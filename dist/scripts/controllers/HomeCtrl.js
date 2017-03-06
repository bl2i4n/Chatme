(function(){

    function HomeCtrl($scope, roomFactory, $uibModal, Message, $cookies){
        //list of rooms
        $scope.roomsList = roomFactory.all;
        //list of messages
        $scope.messages = {};
        //set the room initially to null
        $scope.currentRoom = null;
        //save currentUser from cookie
        $scope.currentUser = $cookies.get('blocChatCurrentUser');


        //sets the current room to the one clicked
        $scope.setCurrentChatRoom = function(room){
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId(room.$id);
        };
        //modal for creating a new room
        $scope.addRoomModal = function(){
          $uibModal.open({
            animation:true,
            templateUrl: '/templates/modal.html',
            controller: 'CreateRoomCtrl'
          })
        };

        //function for sending the message to the current/roomId
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
