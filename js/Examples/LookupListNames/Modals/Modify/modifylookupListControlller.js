var modifyLookupListController = function ($uibModalInstance, lookupListsModalService, lookupListsDataService, id, ngFabForm) {
    var vm = this;
    vm.id = id;
    vm.lookupList  = null;
    vm.customFormOptions = null;
    
    vm.init = function () {
        var lookupListPromise = lookupListsDataService.readById(vm.id);
        lookupListPromise.then(function (response) {
            console.log(response);
            vm.lookupList = response.data;
        });

        vm.customFormOptions = angular.copy(ngFabForm.config);
    };

    vm.save = function () {
        lookupListsDataService.update(vm.lookupList);
    };

    vm.close = function () {
        $uibModalInstance.close();
    };

    vm.init();
};


angular.module("examples").controller("modifyLookupListController", modifyLookupListController);