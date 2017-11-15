var modifyLookupListController = function ($uibModalInstance, lookupListsModalService, lookupListsDataService, id, ngFabForm, lookupListNamesDataService) {
    var vm = this;
    vm.id = id;
    vm.lookupList  = null;
    vm.customFormOptions = null;
    vm.lookupListNames = [];
    vm.selected = 0;



    vm.init = function () {
      
        vm.loadLookupListNames();
    
        if(vm.id !== 0)
        {
            vm.readById(vm.id);
        }
       
        vm.customFormOptions = angular.copy(ngFabForm.config);
    };

    vm.readById = function(id){
        var lookupListPromise = lookupListsDataService.readById(id);
        lookupListPromise.then(function (response) {
            console.log(response);
            vm.lookupList = response.data;
        });
    }


    vm.loadLookupListNames = function(){
        var lookupListNamesPromise = lookupListNamesDataService.readAll();
        lookupListNamesPromise.then(function (response) {
            console.log(response);
            vm.lookupListNames = response.data;
        });
    }

    vm.save = function () {
        if(vm.id !== 0  || angular.isUndefined(vm.id))
        {
            lookupListsDataService.update(vm.lookupList);
        }
        else
        {
            lookupListsDataService.create(vm.lookupList);
        }
        
    };

    vm.close = function () {
        $uibModalInstance.close();
    };

    vm.init();
};


angular.module("examples").controller("modifyLookupListController", modifyLookupListController);