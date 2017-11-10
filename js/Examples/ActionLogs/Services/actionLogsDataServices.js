var actionLogsDataService = function ($http) {

    var apiBase = "http://localhost:17113/api/logs";

    var getAll = function (eventLogFilter) {      
        return $http.post(apiBase, eventLogFilter);
    };

    var getById = function (id) {
        return $http.get(apiBase + "/" + id);
    };

    return {
        GetAll: getAll,
        GetById: getById
    }
};

angular.module("examples").service("actionLogsDataService", actionLogsDataService);