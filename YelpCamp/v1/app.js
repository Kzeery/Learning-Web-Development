var express = require("express");
var app = express();
var bodyParser = require("body-parser");

const hostname = '127.0.0.1';
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

 var campgrounds = [
    {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3361/3576042205_cdaae278ee.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5349/9115889648_9518307558.jpg"}
];

app.get("/", function(req, res) {
   res.render("landing");
});

app.get("/campgrounds", function(req, res) {
        res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new") 
});

app.listen(port, hostname, function() {
    console.log("The YelpCamp Server Has Started!");
});