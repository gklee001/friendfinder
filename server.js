// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

// Dependencies 
var express = require("express");
var path = require("path");
var http = require("http");
var routes = require("./app/routing/htmlRoutes.js")
var friends = require("./app/data/friends.js")
console.log(friends)
// Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes)

// Routes == basic route that sends theuser first to the AJAX Page


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//     var requesetData = "";
//     req.on("data", function (data) {
//         requestData += data;
//     });

//     req.on("end", function () {
//         console.log("you did a", req.method, "with the data:\n", requestData);
//         const method = req.method.toLowerCase();
//         switch (method) {
//             case "post":
//                 return handlePost(req, res);
//             case "get":
//                 return handleGet(req, res);
//         }
//     });
// }
// function handlePost(req, res) {
//     res.end("got a handle")
// }
// function handleGet(req, res) {
//     res.end("got another get")
// }
// server.listen(PORT, function () {
//     console.log("Server listening on: http://localhost:" + PORT);
// });
