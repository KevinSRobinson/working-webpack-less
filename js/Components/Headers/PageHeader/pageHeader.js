var myPageTitle = {
    transclude: "true",
    bindings: {
        icon: "@"
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
        
        
    },
    template:require('raw-loader!./pageHeaderTemplate.html')    
};

angular.module('my-angular-components').component('myPageTitle', myPageTitle);
