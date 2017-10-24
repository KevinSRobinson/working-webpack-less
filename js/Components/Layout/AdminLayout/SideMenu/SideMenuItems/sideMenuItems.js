var adminSideMenuItems = {
    bindings: {
        menuItems: '='
    },
    controllerAs: 'vm',
    controller: function ($rootScope) {
        var vm = this;

        vm.isAuthenticated = $rootScope.isAuthenticated;

        vm.showItem = function (item) {
            if (item.requiresLogin) {
                if (vm.isAuthenticated) {
                    return true;
                }
            } else
                return true;

        };
    },
    template:require('raw-loader!./sideMenuItemsTemplate.html')          
};

adminSideMenuItems.$inject = ['$rootScope'];

angular.module('my-angular-components').component('adminSideMenuItems', adminSideMenuItems);
