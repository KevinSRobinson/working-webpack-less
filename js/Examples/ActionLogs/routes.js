angular.module("examples").config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    
   
        var logEventsState = {
            name: 'logEvents',
            url: '/logEvents',
            template: '<action-logs></action-logs>'
        };
        
        $stateProvider.state(logEventsState)

        $urlRouterProvider.otherwise('/#');
    });