import { readFile } from 'node:fs';
import { readFile as promiseReadFile } from 'node:fs/promises';

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

readFile(filePath, 'utf8', (err, mySecondFile) => {
    if (err) {
        return console.error('Cannot read file...', err.message)
    }
    console.log(mySecondFile);
    readFile(new URL(mySecondFile, import.meta.url), 'utf8', (err, str) => {
        if (err) {
            return console.error('Cannot read file...', err.message)
        }
        console.log(str);
    });
});

promiseReadFile(filePath, 'utf8')
    .then((mySecondFile) => {
        console.log(mySecondFile)
        return promiseReadFile(new URL(mySecondFile, import.meta.url), 'utf-8')
    })
    .then(str => {
        console.log(str);
    })
    .catch((err) => {
        console.log('Cannot read file...', err.message)
    })

// async / await refactor
// top-level async działa więc nie muszę opakowywać kodu poniżej w fukcję z await function()
try {
    const mySecondFile = await promiseReadFile(filePath, 'utf8');
    const str = await promiseReadFile(new URL(mySecondFile, import.meta.url), 'utf-8')
    console.log(str)
} catch (e) {
    console.log('Cannot read file...', e.message)
}

function giveMeNumber() {
    return 3
}

console.log(giveMeNumber())


function giveMeNumberAsync() {
    return Promise.resolve(3)
}

console.log(giveMeNumberAsync())
console.log(await giveMeNumberAsync())

// ... że można prościej mieć Promise:

async function giveMeNumberAsync2() {
    return 3
}

console.log(giveMeNumberAsync2())
console.log(await giveMeNumberAsync2())