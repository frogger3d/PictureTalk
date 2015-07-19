/// <reference path="./scripts/typings/tsd.d.ts" />

import express = require("express");
import path = require("path");
import favicon = require("serve-favicon");
import logger = require("morgan");
import cookieParser = require("cookie-parser");
import bodyParser = require("body-parser");

import routes = require("./routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require("stylus").middleware(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

export declare class Error {
    public name: string;
    public message: string;
    public status: number;
    public stack: string;
    constructor(message?: string);
}

export class HttpError extends Error {
    constructor(public message: string) {
        super(message);
        this.name = "HttpError";
        this.message = message;
        this.stack = (<any>new Error()).stack;
    }
    toString() {
        return this.name + ": " + this.message;
    }
}

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
    let err = new HttpError("Not Found");
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(function(err, req: express.Request, res: express.Response, next) {
        res.status(err.status || 500);
        res.render("error", {
            error: err,
            message: err.message
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req: express.Request, res: express.Response, next) {
    res.status(err.status || 500);
    res.render("error", {
        error: {},
        message: err.message
    });
});

app.set("port", process.env.PORT || 3000);

const server = app.listen(app.get("port"), function() {
    console.log("Express server listening on port " + server.address().port);
});
