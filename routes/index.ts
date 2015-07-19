import express = require("express");

import data = require("../data/index");

class navigationEntry {
    constructor(public id: string, public name: string, public active: boolean) {
    }
}

var router = express.Router();

router.use("/page/:id", page);
router.use("/", index);

/* GET home page. */
function index(req: express.Request, res: express.Response) {
    data.getData(function(err, pages) {
        var naventries = pages.map(function(page) {
            return new navigationEntry(page.id, page.name, page == pages[0]);
        });
        res.render("page", { title: "Picture talk", naventries: naventries, page: pages[0] });
    });
}

function page(req: express.Request, res: express.Response) {
    var id = req.params.id;
    data.getData(function(err, pages) {
        var currentPage = pages.filter(
            function(element) {
                return element.id.toUpperCase() === id.toUpperCase();
            });
        var naventries = pages.map(function(page) {
            return new navigationEntry(page.id, page.name, page == currentPage[0]);
        });
        res.render("page", { title: "Picture talk", naventries: naventries, page: currentPage[0] });
    });
}

export = router;
