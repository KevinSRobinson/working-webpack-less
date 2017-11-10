var lookupListsModalService = function ($uibModal) {
    
    
      
    
    
        var view = function (id) {
            return $uibModal.open({
                template: require('raw-loader!./ViewActionlog/viewActionLogModal.Html'),
                controller: "viewlookupListController",
                controllerAs: 'vm',
                resolve: {
                    id: function () {
                        return id;
                    }
                }
            });
        };
    
        
    
    
        return {
            View: view
        };
    }
    
    angular.module('examples').factory('lookupListsModalService', lookupListsModalService);