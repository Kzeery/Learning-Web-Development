var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://127.0.0.1/yelp_camp");
const hostname = '127.0.0.1';
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/", function(req, res) {
   res.render("landing");
});

app.get("/campgrounds", function(req, res) {
       Campground.find({}, function(err, allCampgrounds) {
           if(err) {
               console.log(err);
           } else {
               res.render("index", {campgrounds: allCampgrounds})
           }
       });
});

// Campground.create({
//     name: 'Granite Hill',
//     image: 'https://s3.amazonaws.com/imagescloud/images/medias/reservation/camping/main.jpg',
//     description: "This is a huge granite hill, no bathrooms no water. Beautiful Granite!"
// }, function(err, campground) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND:  ");
//         console.log(campground)
//     }
// });

app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds 
    var name = req.body.name,
        image = req.body.image,
        description = req.body.description,
        newCampground = {name: name, image: image, description: description};
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            res.redirect("/campgrounds/new");
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new") 
});

app.get("/campgrounds/:id", function(req, res) {
    //find campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    });
    //render show template of item with that ID
});

app.listen(port, hostname, function() {
    console.log("The YelpCamp Server Has Started!");
});