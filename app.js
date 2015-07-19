/// <reference path="./scripts/typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var routes = require("./routes/index");
var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require("stylus").middleware(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
console.log("starting ... doing stuff . bliep bloep");
app.use(routes);
var HttpError = (function (_super) {
    __extends(HttpError, _super);
    function HttpError(message) {
        _super.call(this, message);
        this.message = message;
        this.name = "HttpError";
        this.message = message;
        this.stack = (new Error()).stack;
    }
    HttpError.prototype.toString = function () {
        return this.name + ": " + this.message;
    };
    return HttpError;
})(Error);
exports.HttpError = HttpError;
app.use(function (req, res, next) {
    var err = new HttpError("Not Found");
    err.status = 404;
    next(err);
});
if (app.get("env") === "development") {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render("error", {
            message: err.message,
            error: err
        });
    });
}
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: {}
    });
});
app.set("port", process.env.PORT || 3000);
var server = app.listen(app.get("port"), function () {
    console.log("Express server listening on port " + server.address().port);
});
