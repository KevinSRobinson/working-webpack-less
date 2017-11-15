angular.module("examples").config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    
   
        var logEventsState = {
            name: 'lookupListnames',
            url: '/lookupListnames',
            template: '<lookup-list-names></lookup-list-names>'
        };
        
        $stateProvider.state(logEventsState)

        $urlRouterProvider.otherwise('/#');
    });