/// <reference path="../scripts/typings/tsd.d.ts" />

import express = require("express");
import web = require("./web");
import api = require("./api");

var router = express.Router();

router.use("/api", api);
router.use("/", web);

export = router;
