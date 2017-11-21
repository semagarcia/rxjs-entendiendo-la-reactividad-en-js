const fs = require('fs');
const path = require('path');

fs.readFile('./file.txt', 'utf8', (err, data) => {
    if(err || !data) return null;
    let lines = data.split('\n');
    console.log('Lines: ', lines);
});