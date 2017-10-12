var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");

app.use(express.static("public"));

var day = new Date().getDate();
var month = new Date().getMonth()+1;
var year = new Date().getFullYear();

app.get("/home", function (req, res) {
  res.render("home",{day, month, year});
});

app.get("/success", function (req, res) {
  res.render("success",{data});
});

app.get("/fail", function (req, res) {
  res.render("fail",{data});
});

app.post("/home",urlencodedParser, function (req, res) {
  console.log(req.body);
  var data = {
    "name" : req.body.name,
    "workshop" : req.body.workshop
  };

  if (data.name==='kautuk') {res.render("success",{data});}
  else {res.render("fail",{data})};
  
});

app.listen(3000, "0.0.0.0");
console.log("listening to port 3000");
