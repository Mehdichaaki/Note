// Import the built-in 'http' module to create a server
const http = require('http');

// Create a server using the http.createServer() method
const server = http.createServer(function (req, res) {
    // Set the response header to specify that we're sending HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send the HTML content as the response
    res.end('<h1>Hello Node!!!!</h1>\n');
});

// Specify the port the server should listen on (e.g., 3000)
const port = 3000;

// Start the server and specify a callback function to run once it's started
server.listen(port, function () {
    console.log(`Server is running on http://localhost:${port}`);
});
