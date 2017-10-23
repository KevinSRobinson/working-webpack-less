module.exports = function (app) {

    app.component('buttonExamples', component);

    let component = {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;


        },
        template: require("raw-loader!./buttonExamplesTemplate.html")
    }
}
