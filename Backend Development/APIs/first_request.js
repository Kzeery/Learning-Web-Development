var request = require('request');

console.log("The body of post 7 is...");
request('https://jsonplaceholder.typicode.com/posts', function(error, response, body) {
    if(!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        console.log(parsedData["7"]["body"]);
    } 
});