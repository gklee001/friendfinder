// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. needs get path


// dependencies
var express = require("express");
var path = require("path");

// set up the express app
var app = express();
var PORT = process.env.PORT || 3000;

// set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes === basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(_dirname, "../public/home.html"));
});

app.get("/api/friends", function (req, res) {
    res.sendFile(path.join(_dirname, "../public/survey.html"));
});

