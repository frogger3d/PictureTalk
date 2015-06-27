var express = require('express');
var router = express.Router();

var data = require("../data");

/* GET home page. */
router.get('/', function (req, res) {
  data.getPages(function (err, pages) {
    naventries = pages.map(function (page) {
      return { name: page.name, active: page == pages[0] };
    });
    res.render('page', { title: 'Picture talk', naventries: naventries, page: pages[0] });
  });
});

router.get('/page/:id', function (req, res) {
  data.getPages(function (err, pages) {
    currentPage = pages.filter(
      function (element) {
        return element.id.toUpperCase() === req.params.id.toUpperCase();
      });
    naventries = pages.map(function (page) {
      return { id: page.id, name: page.name, active: page == currentPage[0] };
    });
    res.render('page', { title: 'Picture talk', naventries: naventries, page: currentPage[0] });
  });
});

module.exports = router;
