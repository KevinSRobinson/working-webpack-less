var inputs = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.startDate = new Date();
        vm.firstName = "Kevin";
        vm.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e";
       
        vm.agree = true;
    },
    template: require("raw-loader!./inputsTemplate.html")
};

angular.module('examples').component('inputExamples', inputs);
