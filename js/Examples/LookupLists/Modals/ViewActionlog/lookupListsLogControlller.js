var viewActionLogController = function ($uibModalInstance, lookupListsModalService, lookupListsDataService, id, ngFabForm) {
    var vm = this;
    vm.id = id;
    vm.actionLog = null;
    vm.customFormOptions = null;
    
    vm.init = function () {
        var lookupListPromise = lookupListsDataService.GetById(vm.id);
        lookupListPromise.then(function (response) {
            console.log(response);
            vm.actionLog = response.data;
        });

        vm.customFormOptions = angular.copy(ngFabForm.config);
    };

    vm.save = function () {
     
    };

    vm.close = function () {
        $uibModalInstance.close();
    };

    vm.init();
};


angular.module("examples").controller("viewActionLogController", viewActionLogController);