// Your `htmlRoutes.js` file should include two routes:

// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page.


// Dependencies 
var express = require("express");
var path = require("path");
var router = express.Router();

// Routes == basic route that sends the user first to the AJAX Page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router