/// <reference path="../scripts/typings/multer/multer.d.ts" />
/// <reference path="../scripts/typings/express/express.d.ts" />

import express = require("express");
import multer = require("multer");

var router = express.Router();

router.use(multer(
	{
		dest: "./uploads/",
		rename: function(fieldname, filename) {
			return filename + Date.now();
		},
		onFileUploadStart: function(file, req, res) {
			console.log(file.originalname + " is starting ...");
		},
        onFileUploadComplete: function (file, req, res) {
            console.log(file.fieldname + " uploaded to " + file.path);
		}
	}));

router.get("/photo", apiphoto);

var done = false;

function apiphoto(req: express.Request, res: express.Response) {
	if (done == true) {
		console.log(req.files);
		res.end("File uploaded.");
	}
}

export = router;
