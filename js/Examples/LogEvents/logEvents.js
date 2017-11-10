var logEventsList = {
    controllerAs: "vm",
    controller: function () {
      
    },
    template: require("raw-loader!./logEventsTemplate.html")
};

angular.module("examples").component("logEventsList", logEventsList)
