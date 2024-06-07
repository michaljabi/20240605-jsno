import { Router } from "express";
import { nanoid } from 'nanoid'

export const usersController = new Router()


const users = [];

usersController.get('', (req, res) => {

    const { name = '' } = req.query;

    res.json(users.filter(u => u.name.startsWith(name)))
})

usersController.post('', (req, res) => {

    const myUser = req.body;
    myUser.uuid = nanoid();
    users.push(myUser)
    // res.status(201).json({ uuid: Math.floor(Math.random() * 10000), myUser })
    res.status(201).json(myUser)
})

/// To musi być nad /users/:uuid inaczej się nigdy nie wykona!
usersController.get('/boom', (req, res) => {

    const { name = '' } = req.query;

    res.json(users.filter(u => u.name.startsWith(name)))
})

usersController.get('/:uuid', (req, res) => {

    const { uuid } = req.params;
    const user = users.find(u => u.uuid === uuid);

    if (user) {
        return res.json(user)
    }
    res.status(404).json({ error: `User with uuid ${uuid} not found` })
})


