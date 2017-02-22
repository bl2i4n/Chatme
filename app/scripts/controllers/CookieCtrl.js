(function(){
    function CookieCtrl(){
        
    }
    
    angular
        .module('blocChat')
        .controller('CookieCtrl', ['$uibModalInstance', '$cookies', CookieCtrl]);
})();