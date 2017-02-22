(function(){
    function BlocChatCookies($cookies){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser === ''){
            //Do something to allow users to set their username
            
            $uibModal.open({
            //Modal configuration of object properties
                
            })
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();