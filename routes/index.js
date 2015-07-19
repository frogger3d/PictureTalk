/// <reference path="../scripts/typings/tsd.d.ts" />
var express = require("express");
var web = require("./web");
var api = require("./api");
var router = express.Router();
router.use("/api", api);
router.use("/", web);
module.exports = router;
