var express = require('express');
var router = express.Router();

var data = require("../data");

/* GET home page. */
router.get('/', function (req, res) {
  data.getPages(function (err, results) {
    res.render('index', { title: 'Express', results: results });
  });
});

module.exports = router;
