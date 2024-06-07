import { URL } from 'node:url';
import process from 'node:process'
import fs from 'node:fs/promises'

import 'express-async-errors'
import express from 'express'


const PORT = Number(process.env.PORT) || 3000;

const server = express();

server.get('/data', async (req, res) => {
    try {
        const data = await fs.readFile(new URL('../data.json', import.meta.url), 'utf-8');
        const dataOBJ = JSON.parse(data);
        res.json(dataOBJ);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Cannot open file' });
    }
})

server.all('**', (req, res) => {
    res.json({ error: `404 - nie znam ścieżki ${req.url}` });
})

server.listen(PORT, () => {
    console.log(`I am on: http://localhost:${PORT}`)
})

process.on('uncaughtException', (e) => {
    console.log('This is not workng....');
    console.error(e);
})