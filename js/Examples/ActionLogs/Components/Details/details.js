angular.module("examples").component("details", {
    controllerAs: 'vm',
    bindings:{
        title: '@'
    },
    controller: function(){
        var vm  = this;
        vm.names = [];

        vm.names.push({firstname: 'Kevin', lastname: 'tobinson'});
        vm.names.push({firstname: '324', lastname: '44'});
        vm.names.push({firstname: '324', lastname: '4444'});

        console.log(vm.names);

     
    },
    template: require('raw-loader!./detailTemplate.html')
})