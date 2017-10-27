angular.module("examples").config(function ($locationProvider, $stateProvider, $httpProvider,  $urlRouterProvider, angularAuth0Provider) {

    
    var login = {
        name: 'login',
        url: '/login',
        controllerAs: 'vm',
        template: '<login></login>',
    };

    var logout = {
        name: 'logout',
        url: '/logout',
        controller: function (authService) {
            authService.logout();
        },
        template: '<h1>You have logged Out</h1>',
        controllerAs: 'vm'
    };

 // Initialization for the angular-auth0 library
 angularAuth0Provider.init({
    clientID: '9rAOq84sR3s6GhMI2cwZq0rNNOdVAlJB',
    domain: 'volunteernow.auth0.com',
    responseType: 'token id_token',
    audience: 'https://' + 'volunteernow.auth0.com' + '/userinfo',
    redirectUri: 'http://localhost:8080/callback',
    scope: 'openid'
  });

    // lockProvider.init({
    //     clientID: 'UY5BHrujRwp7y1TZQl1Bif88aeeVRkrU',
    //     domain: 'volunteernow.auth0.com',
    //     options: {
    //         auth: {
    //             params: {
    //                 scope: 'openid'
    //             }
    //         }
    //     }
    // });

    // Configuration for angular-jwt
    // jwtOptionsProvider.config({
    //     tokenGetter: function () {
    //         return localStorage.getItem('id_token');
    //     },
    //     whiteListedDomains: ['localhost'],
    //     unauthenticatedRedirectPath: '/login'
    // });

    $locationProvider.html5Mode(true);

    // Add the jwtInterceptor to the array of HTTP interceptors
    // so that JWTs are attached as Authorization headers
    //'$httpProvider.interceptors.push('jwtInterceptor');


    $stateProvider.state(login);
    $stateProvider.state(logout);
 
    $urlRouterProvider.otherwise('/');
});
