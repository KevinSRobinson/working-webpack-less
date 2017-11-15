var modifylookupListNameController = function ($uibModalInstance, lookupListNamesModalService, lookupListNamesDataService, id, ngFabForm, lookupListNamesDataService) {
    var vm = this;
    vm.id = id;
    vm.lookupListName  = null;
    vm.customFormOptions = null;
    vm.lookupListNameNames = [];
    vm.selected = 0;



    vm.init = function () {
        
        vm.loadForm();
       
        vm.customFormOptions = angular.copy(ngFabForm.config);
    };

    vm.readById = function(id){
        var lookupListNamePromise = lookupListNamesDataService.readById(id);
        lookupListNamePromise.then(function (response) {
            
            vm.lookupListName = response.data;
        });
    }

    vm.loadForm = function(id){
        if(vm.id !== 0)
        {
            vm.readById(vm.id);
        }
    }
  

    vm.save = function () {
        if(vm.id !== 0  || angular.isUndefined(vm.id))
        {
            lookupListNamesDataService.update(vm.lookupListName);
        }
        else
        {
            lookupListNamesDataService.create(vm.lookupListName);
        }
        
    };

    vm.close = function () {
        $uibModalInstance.close();
    };

    vm.init();
};


angular.module("examples").controller("modifylookupListNameController", modifylookupListNameController);