var lookupListNamesDataService = function ($http) {

    var apiBase = "http://localhost:17113/api/LookupListNames";

    var getAll = function () {      
        return $http.get(apiBase);
    };

    var getById = function (id) {
        return $http.get(apiBase + "/" + id);
    };

    var update = function (lookupList) {
        return $http.put(apiBase + "/" + lookupList.id, lookupList);
    };

    var create = function (lookupList) {
        return $http.post(apiBase, lookupList);
    };

    return {
        readAll: getAll,
        readById: getById,
        create: create,
        update: update
    }
};

angular.module("examples").service("lookupListNamesDataService", lookupListNamesDataService);