// Dependencies 
var express = require("express");
var path = require("path");
var router = express.Router();

// Routes == basic route that sends the user first to the AJAX Page
// router.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html"));
// });

// router.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/survey.html"));
// });
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname + "../public/home.html"));
// });

var path = require("path");
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    router.use(function (req, res) {
        res.sendFile(path.join(__dirname + "../public/home.html"));
    });
}