var login = {
    template: require("raw-loader!./loginTemplate.html")
};

angular.module('examples').component('login', login);

