(function(){
    function Message($firebaseArray, $cookies, roomFactory){
        var ref = firebase.database().ref().child("messages");

        var messages = $firebaseArray(ref);

        return {
            getByRoomId: function (roomId){
            //filter messages by their room ID
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            },

            send: function(newMessage, currentRoomId){
              var messageDateTime = new Date;
              //send method logic for a new message
              messages.$add({
                username: $cookies.get('blocChatCurrentUser'), // get the user from the cookie
                content: newMessage, //content is set to newMessage
                roomId: currentRoomId,
                sentAt: messageDateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
              });

            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', 'roomFactory', Message]);


})();
