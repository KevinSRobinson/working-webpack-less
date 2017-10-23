var dateExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

    
    },
    templateUrl: "raw-loader!./dateExamplesTemplate.html"
};

angular.module('examples').component('dateExamples', dateExamples);
