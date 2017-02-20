(function(){
    function MessagE($firebaseArray){
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function (roomId){
            
            //filter messages by their room ID
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
    
})();