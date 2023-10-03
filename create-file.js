// Import the built-in 'fs' module (File System)
const fs = require('fs');

// Create the content to be written to the file
const content = 'Hello Node';

// Use the fs.writeFile method to create the file
fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File "welcome.txt" has been created.');
  }
});