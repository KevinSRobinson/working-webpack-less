var selectListExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.items = [
        {   
            "id": 1,
            "name": "Cox",
            "lastName": "Carney"
        },
        {
            "id": 2,
            "name": "Kevin",
            "lastName": "Robeinons"
        },
        {
            "id": 3,
            "name": "Sean",
            "lastName": "eRoebinons"
        }];
    },
    template: require("raw-loader!./selectListExamplesTemplate.html")
};

angular.module('examples').component('selectListExamples', selectListExamples);
