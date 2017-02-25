(function(){
    function BlocChatCookies($cookies, $uibModal){

        //checks if there is a user stored in cookies. Stores that info as currentUser variable
        var currentUser = $cookies.get('blocChatCurrentUser');

        //if there is no currentUser from above, then open the modal
        if(!currentUser || currentUser === ' '){
            //Do something to allow users to set their username
            //opens modal with defined info, keyboard value disables Esc key.
            //backdrop value stops from clicking off the modal
            $uibModal.open({
            //Modal configuration of object properties
              templateUrl: 'templates/cookies.html', //points to our template cookies.html
              controller: 'CookieCtrl as cookie', //sets up an alias for the call to our CookieCtrl
              size: 'md', //find out what this does
              keyboard: false,
              backdrop: 'static'

            });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
