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


    var view = function (id) {
        return $uibModal.open({
            template: require('raw-loader!./ViewActionlog/viewActionLogModal.Html'),
            controller: "viewlookupListNameController",
            controllerAs: 'vm',
            resolve: {
                id: function () {
                    return id;
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