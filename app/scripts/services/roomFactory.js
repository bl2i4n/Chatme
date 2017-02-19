(function(){
    function roomFactory($firebaseArray){
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
    
        return {
            all: rooms,
            //add create room abstract method
            //call angularFire's $add() with the $firebaseArray service
            //review github article on how this gets done
            createRoom: createRoom
        };
        
        //function is hoisted to the top
        function createRoom(newRoom){
            return rooms.$add(newRoom)
        }
    
    }
        
    angular
        .module('blocChat')
        .factory('roomFactory', ['$firebaseArray', roomFactory]);
})();

