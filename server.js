// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

// Dependencies 
var bodyParser = require('body-parser')
var express = require("express");
var path = require("path");
var http = require("http");

// Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Set up Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// Routes == basic route that sends theuser first to the AJAX Page


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

