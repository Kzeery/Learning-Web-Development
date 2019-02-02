var express = require("express");
var app = express();


// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});
// "/dog" = > "MEOW!"
app.get("/dog", function(req, res) {
    console.log("SOMEONE MADE A REQUEST TO /DOG!");
    res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
});
// Everything else => "YOU ARE A STAR!!!"
app.get("*", function(req, res) {
   res.send("YOU ARE A STAR!!!"); 
});


// Listen for requests

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started!");
});