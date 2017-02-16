(function(){
    
    function HomeCtrl(){
        this.roomsList = Room.all
    }
 
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['roomFactory', 'Room', HomeCtrl]);
 
 })();