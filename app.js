// Require/import the HTTP module
var http = require("http");
// Define a port to listen for incoming requests
var PORTa = 7000;
var PORTb = 7500;

// Create a generic function to handle requests and responses
function handleRequestA(request, response) {
    // Send the below string to the client when the user visits the PORT URL
    response.end("You're talented and beautiful. I admire you and appreciate you! Keep up the stellar work, sweetness.");
}

// Create a generic function to handle requests and responses
function handleRequestB(request, response) {
    // Send the below string to the client when the user visits the PORT URL
    response.end("You disgust me. Everything about you is vile. Heaps of burning garbage are more lovely than you.");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverA = http.createServer(handleRequestA);
var serverB = http.createServer(handleRequestB);
// Start our server so that it can begin listening to client requests.
serverA.listen(PORTa, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORTa);
});
serverB.listen(PORTb, function () {
    console.log("Server listening on: http://localhost:" + PORTb);
});