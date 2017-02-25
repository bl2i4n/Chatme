(function(){
    function CookieCtrl($scope, $uibModalInstance, $cookies){

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
    //   this.setUserName = function() {
    //     $cookies.put('blocChatCurrentUser', this.username) //get the current user at this cookie, and register that user with cookie
    //     $uibModalInstance.close(); // once we receive the username close the instance
    //     console.log(this.username); // show username in console.log
    //   }
    // };

    //lisajmin's style
    this.setUserName = function() {
      if (this.username !== undefined){
        $cookies.put('blocChatCurrentUser', this.username);
        $uibModalInstance.close();
        console.log(this.username);
      } else {
        alert("Please enter a valid username");
        console.log(this.username);
        }
      }

    }
    angular
        .module('blocChat')
        .controller('CookieCtrl', ['$scope','$uibModalInstance', '$cookies', CookieCtrl]);
})();
