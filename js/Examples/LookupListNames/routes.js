angular.module("examples").config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    
   
        var logEventsState = {
            name: 'lookupLists',
            url: '/lookupLists',
            template: '<lookup-lists></lookup-lists>'
        };
        
        $stateProvider.state(logEventsState)

        $urlRouterProvider.otherwise('/#');
    });