var lookupListNamesModalService = function ($uibModal) {

    let modifyTemplate = require('raw-loader!./Modify/modifyLookupListNameModal.Html');

    var modify = function (id) {
        return $uibModal.open({
            template: modifyTemplate,
            controller: "modifylookupListNameController",
            controllerAs: 'vm',
            resolve: {
                id: function () {
                    return id;
                }
            }
        });
    };

    var create = function (id) {
        return $uibModal.open({
            template: modifyTemplate,
            controller: "modifylookupListNameController",
            controllerAs: 'vm',
            resolve: {
                id: function () {
                    return 0;
                }
            }
        });
    };
   



    return {
        View: view,
        modify: modify,
        create: create,
    };
}

angular.module('examples').factory('lookupListNamesModalService', lookupListNamesModalService);