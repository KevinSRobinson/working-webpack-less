let component = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.click = function(){
            alert('You click me');
        };
    },
    template: require("raw-loader!./buttonExamplesTemplate.html")
}
angular.module("examples").component('buttonExamples', component);