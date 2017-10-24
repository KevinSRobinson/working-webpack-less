var sideMenuFooter = {
    bindings: {
        links: '='
    },
    controllerAs: 'vm',
    template:require('raw-loader!./sideFooterTemplate.html')       
};


angular.module('my-angular-components').component('sideMenuFooter', sideMenuFooter);
