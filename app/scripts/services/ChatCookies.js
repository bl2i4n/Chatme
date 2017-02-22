(function(){
    function BlocChatCookies($cookies){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser === ''){
            //Do something to allow users to set their username
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', BlocChatCookies]);
})();