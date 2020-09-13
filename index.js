var express = require("express");
const bodyParser = require("body-parser");
//const request = require("request");
const https = require("https");

var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
	console.log("Listening on port 3000!");
});
