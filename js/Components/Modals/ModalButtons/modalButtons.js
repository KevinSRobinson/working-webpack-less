var myModalButtons = {
    bindings: {
        save: '&',
        close: '&',
        saveText: '@',
        saveVisible: '@',
        closeVisible: '@',
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            //defaults        
            vm.saveText = 'Save';

            if(!angular.isDefined(vm.closeText) && vm.closeText != ''){
                vm.closeText = 'Close';
            }
            

            vm.saveVisible = true;
            vm.closeVisible = true;
        };

    },
    template:require('raw-loader!./modalButtonsTempalte.html')          
};

angular.module('my-angular-components').component('myModalButtons', myModalButtons);
