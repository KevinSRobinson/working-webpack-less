var tags = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.selectedCats = {};
        vm.selectedTags = {};
        
        vm.cats = [{
            id: 1,
            name: "Cat 1"
        }, {
            id: 2,
            name: "Cat 2"
        }];

        vm.tags = [{
            id: 1,
            name: "VB.net"
        }, {
            id: 2,
            name: "c# "
        }];
    },
    template: require("raw-loader!./tagsTemplate.html")
};

angular.module('examples').component('tagsExamples', tags);
