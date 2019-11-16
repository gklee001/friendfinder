// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

// Dependencies 
var express = require("express");
var path = require("path");

// Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes == basic route that sends the user first to the AJAX Page

