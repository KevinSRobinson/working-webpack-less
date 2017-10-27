var dateExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

    
    },
    template: require("raw-loader!./dateExamplesTemplate.html")
};

angular.module('examples').component('dateExamples', dateExamples);
