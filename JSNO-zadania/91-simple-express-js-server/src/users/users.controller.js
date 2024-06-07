import { Router } from "express";
import { usersService } from "./users.service.js";

export const usersController = new Router()


usersController.use((req, res, next) => {
    console.log('Jestem tylko na endpointach /users/**')
    next();
})

usersController.get('', async (req, res) => {

    const { name } = req.query;

    res.json(await usersService.getAll(name))
})

usersController.post('', async (req, res) => {

    const myUser = await usersService.addUser(req.body);
    // res.status(201).json({ uuid: Math.floor(Math.random() * 10000), myUser })
    res.status(201).json(myUser)
})

/// To musi być nad /users/:uuid inaczej się nigdy nie wykona!
usersController.get('/boom', (req, res, next) => {
    console.log('Jestem tylko dla boom!')
    next();
}, (req, res) => {
    res.json({})
})

usersController.get('/:uuid', async (req, res) => {

    const { uuid } = req.params;

    // try {
    res.json(await usersService.getByUuid(uuid))
    // } catch (e) {
    //     res.status(404).json({ error: e.meassage })
    // }
})


