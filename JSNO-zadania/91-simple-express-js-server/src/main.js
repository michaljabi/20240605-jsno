import process from 'node:process'

import 'express-async-errors'
import express from 'express'
import { nanoid } from 'nanoid'
import { dataController } from './data/data.controller.js';


const PORT = Number(process.env.PORT) || 3000;

const server = express();

// Tutaj używamy middleware do odpakowania z req. body i wrzcenia go jako:
// req.body w handlarze dla ścieżki
server.use(express.json())


server.use((req, res, next) => {
    console.log(`Client ${req.ip} is hitting endpoint ${req.url} with method ${req.method}`);
    next();
    // next(new Error('OH no !'));
})

server.use((req, res, next) => {
    console.log('Informacja z cookie', req.headers['cookie']);
    next();
})

server.use('/data', dataController)

const users = [];

server.get('/users', (req, res) => {

    const { name = '' } = req.query;

    res.json(users.filter(u => u.name.startsWith(name)))
})


/// To musi być nad /users/:uuid inaczej się nigdy nie wykona!
server.get('/users/boom', (req, res) => {

    const { name = '' } = req.query;

    res.json(users.filter(u => u.name.startsWith(name)))
})

server.get('/users/:uuid', (req, res) => {

    const { uuid } = req.params;
    const user = users.find(u => u.uuid === uuid);

    if (user) {
        return res.json(user)
    }
    res.status(404).json({ error: `User with uuid ${uuid} not found` })
})


server.post('/users', (req, res) => {

    const myUser = req.body;
    myUser.uuid = nanoid();
    users.push(myUser)
    // res.status(201).json({ uuid: Math.floor(Math.random() * 10000), myUser })
    res.status(201).json(myUser)
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