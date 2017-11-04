var myStatusAlert = {
    bindings: {
           successMessage: "@",
        errorMessage: "@",
        message: "@",
        isError: "@"
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;


        vm.$onInit = function () {
            vm.errorMessage = "";
            vm.successMessage = "";
            vm.isError = false;
        };


        vm.getMessage = function () {
            return vm.message;           
        };

        vm.getClass = function () {
            if (vm.isError === 'true')
                return " errorMessage";
            else
                return " successMessage";
        };

        vm.getIcon = function () {
            if (vm.isError === 'true')
                return " fa fa-warning fa-2x";
            else
                return " fa fa-check fa-2x";
        };

        vm.getId = function () {
            if (vm.isError === 'true')
                return "errorMessage";
            else
                return "successMessage";
        };
       


    },
    template:require('raw-loader!./statusAlertTemplate.html')      
};


angular.module('my-angular-components').component('myStatusAlert', myStatusAlert);
