//todo: allow customize height
var mySpinner = {
    bindings: {
        ngModel: '='
    },
    template: require("raw-loader!./spinnerTemplate.html")
};

angular.module('my-angular-components').component('mySpinner', mySpinner);



