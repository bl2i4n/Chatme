(function() {
    function Message($firebaseArray, $cookies) {
      //access the database objects and child objects
        var ref = firebase.database().ref().child("messages");
        var message = $firebaseArray(ref);

        return {
          //make sure the room we are sending messages to is the correct roomId
            getByRoomId: function(roomId) {
                return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
            },
            //send a new message to the roomId we are currently in
            send: function(newMessage, currentRoomId) {
                message.$add({
                  //add these properties to the message
                    username: $cookies.get('blocChatCurrentUser'),
                    content: newMessage,
                    sentAt: Date.now(),
                    roomId: currentRoomId
                });
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
