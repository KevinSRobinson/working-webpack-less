

module.exports = function (app) {
    app.component('home', {  templateU: require("raw-loader!./homeTemplate.html") })
}
