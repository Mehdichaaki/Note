// Import the built-in 'fs' module (File System)
const fs = require('fs');

// Use the fs.readFile method to read the file
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Data read from "welcome.txt":', data);
    }
});
