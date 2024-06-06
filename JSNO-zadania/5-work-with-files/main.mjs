import { readFile } from 'node:fs';
import { URL, fileURLToPath } from 'node:url'
import { join } from 'node:path'

const filePath = new URL('./data.txt', import.meta.url);

console.log('join', join(fileURLToPath(import.meta.url), 'data.txt'))

// console.log(import.meta.url);
// console.log(new URL('./data.txt', import.meta.url));

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