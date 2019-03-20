//REQUIREMENTS
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.listen(port, () => console.log("Listening on port %s", port));