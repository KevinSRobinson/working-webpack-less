module.exports = function (app) {
    app.component('gridExamples', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

            vm.myData = [{
                    "firstName": "Cox",
                    "lastName": "Carney"
                },
                {
                    "firstName": "Kevin",
                    "lastName": "Robinons"
                },
                {
                    "firstName": "Sean",
                    "lastName": "Robinons"
                }
            ];
        },
        template: require("raw-loader!./gridExampleTemplate.html")
    });

}
