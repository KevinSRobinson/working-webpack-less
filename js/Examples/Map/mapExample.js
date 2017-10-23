var mapExample = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.mapOptions = {
                center: {
                    latitude: 45,
                    longitude: -73
                },
                zoom: 8
            };
    },
    template: require('raw-loader!./mapExampleTemplate.html')
};

angular.module('examples').component('mapExample', mapExample);
