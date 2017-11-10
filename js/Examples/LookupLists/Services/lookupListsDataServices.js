var lookupListsDataService = function ($http) {

    var apiBase = "http://localhost:17113/api/LookupLists";

    var getAll = function () {      
        return $http.get(apiBase);
    };

    var getById = function (id) {
        return $http.get(apiBase + "/" + id);
    };

    return {
        GetAll: getAll,
        GetById: getById
    }
};

angular.module("examples").service("lookupListsDataService", lookupListsDataService);