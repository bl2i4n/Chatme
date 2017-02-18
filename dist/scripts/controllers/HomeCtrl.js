(function(){
    
    function HomeCtrl($scope, roomFactory){
        $scope.roomsList = roomFactory.all
    }
 
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'roomFactory', HomeCtrl]);
 
 })();