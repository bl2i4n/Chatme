(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("messages");
        var message = $firebaseArray(ref);

        return {
            getByRoomId: function(roomId) {
                return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
            },
            send: function(newMessage, currentRoomId) {
                message.$add({
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
