const   passportLocalMongoose = require("passport-local-mongoose"),
        LocalStrategy         = require("passport-local"),
        bodyParser            = require("body-parser"),
        mongoose              = require("mongoose"),
        passport              = require("passport"),
        express               = require("express"),  
        app                   = express(),
        hostname              = "127.0.0.1",
        port                  = 3000;

mongoose.set("useNewUrlParser", true);
mongoose.connect("mongodb://localhost/auth_demo_app");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", function(req, res) {
    res.render("secret");
});

app.listen(port, hostname, function() {
    console.log("App has started!");
});