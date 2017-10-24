var alertsDropDownMenu = {
    bindings: {
        menuItems:'=',
    },
    controllerAs: 'vm',
    template:require('raw-loader!./alertsDropDownMenuTemplate.html')       
};


angular.module('my-angular-components').component('alertsDropDownMenu', alertsDropDownMenu);
