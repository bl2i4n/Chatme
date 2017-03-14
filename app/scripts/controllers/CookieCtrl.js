(function(){
    function CookieCtrl($scope, $uibModalInstance, $cookies){
      this.debugable = false;
      //move hardcoded variables to the top just in case you need to configure them later
      //pitfalls of hardcoded values
      var COOKIE_USERNAME = 'blocChatCurrentUser';
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

    //attempt number 2
    //function that will store username when ran in cookies.html
    //   this.setUserName = function() {
    //     $cookies.put('blocChatCurrentUser', this.username) //get the current user at this cookie, and register that user with cookie
    //     $uibModalInstance.close(); // once we receive the username close the instance
    //     console.log(this.username); // show username in console.log
    //   }
    // };

    //lisajmin's style
    //logic to check if username entered from the cookies.html
    this.setUserName = function(username) {
      console.log(username);
      username = username.trim(); // Remove leading and trailing whitespace.
      if (username){
        $cookies.put(COOKIE_USERNAME, username); //save username in a cookie and as the blocChatCurrentUser
        $uibModalInstance.close();
      } else {
        //use modal for consistency
        alert("Please enter a valid username");
        }
      }

    }
    angular
        .module('blocChat')
        .controller('CookieCtrl', ['$scope','$uibModalInstance', '$cookies', CookieCtrl]);
})();
