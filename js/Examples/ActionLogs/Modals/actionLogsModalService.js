var actionLogsModalService = function ($uibModal) {
    
    
      
    
    
        var view = function (id) {
            return $uibModal.open({
                template: require('raw-loader!./ViewActionLog/viewActionLogModal.html'),
                controller: "viewActionLogController",
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
    
    angular.module('examples').factory('actionLogsModalService', actionLogsModalService);