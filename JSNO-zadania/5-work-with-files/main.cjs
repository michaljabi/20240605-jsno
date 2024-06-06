// CommonJS
const { readFile } = require('node:fs');
const path = require('node:path');


const filePath = path.join(__dirname, 'data.txt');
// __dirname i __filename są tylko w CommonJS
console.log(__dirname);
// console.log(__filename);
console.log(path.join(__dirname, 'data.txt'));

readFile(filePath, (err, buffer) => {
    if (err) {
        return console.error('Cannot read file...', err.message)
    }
    console.log(buffer.toString());
});

readFile(filePath, 'utf8', (err, str) => {
    if (err) {
        return console.error('Cannot read file...', err.message)
    }
    console.log(str);
}); 