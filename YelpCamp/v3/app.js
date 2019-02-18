var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    Campground     = require("./models/campground"),
    Comment        = require("./models/comment"),
    seedDB         = require("./seeds");

mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://127.0.0.1/yelp_camp");
const hostname = '127.0.0.1';
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();



app.get("/", function(req, res) {
   res.render("campgrounds/landing");
});

app.get("/campgrounds", function(req, res) {
       Campground.find({}, function(err, allCampgrounds) {
           if(err) {
               console.log(err);
           } else {
               res.render("campgrounds/index", {campgrounds: allCampgrounds})
           }
       });
});

app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds 
    Campground.create(req.body.campground, function(err, newlyCreated) {
        if(err) {
            res.redirect("/campgrounds/new");
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res) {
   res.render("campgrounds/new") 
});

app.get("/campgrounds/:id", function(req, res) {
    //find campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// =====================
// COMMENTS ROUTES
// =====================

app.get("/campgrounds/:id/comments/new", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCamp) {
        if(err) {
            console.log(err);
        } else {
            res.render("comments/new", {campground: foundCamp});
        }
    });
});

app.post("/campgrounds/:id/comments", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCamp) {
        if(err) {
            console.log(err);
        } else {
            Comment.create(req.body.comment, function(err, createdComment) {
                if(err) {
                    console.log(err);
                    res.redirect("/campgrounds");
                } else {
                    foundCamp.comments.push(createdComment);
                    foundCamp.save();
                    res.redirect("/campgrounds/" + req.params.id);
                }
            });
        }
    });
});

app.listen(port, hostname, function() {
    console.log("The YelpCamp Server Has Started!");
});