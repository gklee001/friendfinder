// dependencies
var express = require("express");
var path = require("path");
var friends = require("../data/friends.js")
var router = express.Router();

// routes === basic route that sends the user first to the AJAX Page

router.get("/api/friends", function (req, res) {
    res.json(friends)
});

// router.post("/api/friends", function (req, res) {

// })

module.exports = router
