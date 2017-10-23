var modals = {
    controllerAs: 'vm',
    controller: function ($uibModal) {
        var vm = this;

        vm.open = function () {
            return $uibModal.open({
                templateUrl: 'sampleModalTemplate.html',
                controllerAs: 'vm',
                controller:function($uibModalInstance){
                    var vm = this;
                    vm.close = function () {
                      $uibModalInstance.close();
                    };
                }
            });
        };
    },
    template: require("raw-loader!./modalsTemplate.html")
};

angular.module('examples').component('modalExamples', modals);
