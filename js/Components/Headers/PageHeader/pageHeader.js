var myPageTitle = {
    transclude: "true",
    bindings: {
        icon: "@",
        text: "@"
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
        
        vm.getIcon = function() {
            console.log(vm.icon)
            return " " + vm.icon;
        };
    },
    template:require('raw-loader!./pageHeaderTemplate.html')    
};

angular.module('my-angular-components').component('myPageTitle', myPageTitle);
