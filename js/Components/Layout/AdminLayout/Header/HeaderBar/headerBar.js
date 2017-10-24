var adminHeaderBar = {
    transclude: true,
    bindings: {
        title: '@',
        theme: '@',
        userMenuItems: "=",
        alertMenuItems: "=",
        userName: '@'
    },
    controllerAs: 'vm',
    template:require('raw-loader!./headerBarTemplate.html')           
};


angular.module('my-angular-components').component('adminHeaderBar', adminHeaderBar);