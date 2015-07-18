var data = require("../data/index");
function initialize(app) {
    app.get('/', index);
    app.get('/page/:id', page);
}
exports.initialize = initialize;
var navigationEntry = (function () {
    function navigationEntry(id, name, active) {
        this.id = id;
        this.name = name;
        this.active = active;
    }
    return navigationEntry;
})();
function index(req, res) {
    data.getData(function (err, pages) {
        var naventries = pages.map(function (page) {
            return new navigationEntry(page.id, page.name, page == pages[0]);
        });
        res.render('page', { title: 'Picture talk', naventries: naventries, page: pages[0] });
    });
}
function page(req, res) {
    var id = req.params.id;
    data.getData(function (err, pages) {
        var currentPage = pages.filter(function (element) {
            return element.id.toUpperCase() === id.toUpperCase();
        });
        var naventries = pages.map(function (page) {
            return new navigationEntry(page.id, page.name, page == currentPage[0]);
        });
        res.render('page', { title: 'Picture talk', naventries: naventries, page: currentPage[0] });
    });
}
