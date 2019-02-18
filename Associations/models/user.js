var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({ 
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }]
});

module.exports = mongoose.model("user", userSchema);