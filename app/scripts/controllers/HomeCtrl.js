(function(){

    function HomeCtrl($scope, roomFactory, $uibModal, Message, $cookies){
        $scope.roomsList = roomFactory.all;

        //load without a room selected, used to hold current room
        this.currentRoom = "";

        //states whether room name is shown or not
        this.currentRoomShowing = false;

        //sets messages to null for first run through
        this.messages = "";

        this.content = "";

        //sets the current room to the one clicked
        this.setCurrentChatRoom = function(clickedRoom){
            this.currentRoom = clickedRoom;
            this.messages = Message.getByRoomId(this.currentRoom.$id);

            console.log(this.currentRoom.$id);
            console.log(this.messages);
        };


//        tried using another controller to use uibmodal
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

        //method for Home Controller to open modal, used Travis Rodger's method
        //this was moved to a controller
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

    this.sendMessage = function(){
      if(this.content){
        Message.send(this.content, this.currentRoom.$id);
        this.content = "";
      }
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'roomFactory', '$uibModal', 'Message', '$cookies', HomeCtrl]);

 })();
