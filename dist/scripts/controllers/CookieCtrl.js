(function(){
    function CookieCtrl($scope, roomFactory, $uibModalInstance){

      //attempt at writing username myself
    //         $scope.createUser = function($scope, $uibModalInstance){
    //           $scope.newUser = {$value}; // value to hold new user
    //           $scope.newUser = currentUser;
    //
    //           if(currentUser==newUser){
    //             $uibModalInstance.dismiss
    //           }
    //         }
    // }

    //function that will store username when ran in cookies.html


    angular
        .module('blocChat')
        .controller('CookieCtrl', ['$scope', 'roomFactory','$uibModalInstance', '$cookies', CookieCtrl]);
})();
