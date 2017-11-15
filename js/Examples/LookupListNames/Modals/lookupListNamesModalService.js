var lookupListsModalService = function ($uibModal) {

    let modifyTemplate = require('raw-loader!./Modify/modifyLookupListModal.Html');

    var modify = function (id) {
        return $uibModal.open({
            template: modifyTemplate,
            controller: "modifyLookupListController",
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
            controller: "modifyLookupListController",
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
        View: view,
        modify: modify,
        create: create,
    };
}

angular.module('examples').factory('lookupListsModalService', lookupListsModalService);