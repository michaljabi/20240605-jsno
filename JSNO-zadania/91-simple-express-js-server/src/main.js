import process from 'node:process'

import 'express-async-errors'
import express from 'express'

import { dataController } from './data/data.controller.js';
import { usersController } from './users/users.controller.js';


const PORT = Number(process.env.PORT) || 3000;

const server = express();

// Tutaj używamy middleware do odpakowania z req. body i wrzcenia go jako:
// req.body w handlarze dla ścieżki
server.use(express.json())


server.use((req, res, next) => {
    console.log(`Client ${req.ip} is hitting endpoint ${req.url} with method ${req.method}`);
    next();
    //next(new Error('OH no !'));
})

server.use((req, res, next) => {
    console.log('Informacja z cookie', req.headers['cookie']);
    next();
})

server.use('/data', dataController)
server.use('/users', usersController)


server.all('**', (req, res) => {
    res.json({ error: `404 - nie znam ścieżki ${req.url}` });
})

// Error handling middleware:
server.use((err, req, res, next) => {
    // logic

    console.error(err);

    res.status(500).json({
        error: 'An error occured',
        message: err.message
    })
})

server.listen(PORT, () => {
    console.log(`I am on: http://localhost:${PORT}`)
})

process.on('uncaughtException', (e) => {
    console.log('This is not workng....');
    console.error(e);
})