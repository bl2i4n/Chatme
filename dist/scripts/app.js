(function(){
    //sets up the config for the states and behaviors of our app
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });

        $stateProvider
            //depending on which state is chosen below
            //direct the page to that template, or go to that url
            .state('home', { // takes us to the landing page
                url: '/',
                controller: 'HomeCtrl as home', //sets up alias landing
                templateUrl: 'templates/home.html'

            });
    };

    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies']) // ui.router is for ui0sref for new type of linking
        .config(config);
})();
