const fs = require('fs');
const path = require('path');

fs.readFile('./file.txt', 'utf8', (err, data) => {
    if(err) return null;
    return data;
});