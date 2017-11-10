angular.module("examples").config(function ($locationProvider, $stateProvider, $urlRouterProvider) {


    var homeState = {
        name: 'home',
        url: '/home',
        controllerAs: "vm",
        template: '<home></home>'
    };

    var formsState = {
        name: 'forms',
        url: '/forms',
        template: '<example-form></example-form>'
    };

  
    $locationProvider.html5Mode(false);
    
    $stateProvider.state(homeState);
    
    $stateProvider.state(formsState);

    $urlRouterProvider.otherwise('/#');
});