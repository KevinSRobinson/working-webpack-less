var statusAlerts = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

 
    },
    template: require("raw-loader!./statusAlertsTemplate.html")
};

angular.module('examples').component('statusAlertExamples', statusAlerts);

