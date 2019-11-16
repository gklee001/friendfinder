// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. needs get path


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
