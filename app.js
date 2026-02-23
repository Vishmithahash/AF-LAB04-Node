const fs = require('fs');

console.log("Hello Vishmitha Node.js LAB 04");


fs.readFile('file.txt', 'utf8', function(err, data) {

 
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    
    console.log("File content:");
    console.log(data);

});