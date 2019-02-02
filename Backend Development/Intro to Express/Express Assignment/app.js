var express = require("express");
var app = express();

app.get("/", function(req, res) {
   res.send("Hi there, Welcome to my assignment");
});

app.get("/speak/:animal", function(req, res) {
   var sounds = {
       pig: 'Oink',
       cow: 'Moo',
       dog: 'Woof Woof!',
       cat: 'Meoww!',
       goldfish: '...'
       
   };
   var animal = req.params.animal.toLowerCase();
   res.send("The " + animal + " says '" + sounds[animal] + "'");
});

app.get("/repeat/:phrase/:amount", function(req, res) {
   var amount = Number(req.params.amount);
   var phrase = req.params.phrase;
   var fullPhrase = phrase;
   for(var i = 1; i < amount; i++) {
       fullPhrase += (" " + phrase);
   }
   res.send(fullPhrase);
});

app.get("*", function(req, res) {
   res.send("Sorry, page not found...What are you doing with your life?"); 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started!");
});