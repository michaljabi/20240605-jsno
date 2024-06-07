import { nanoid } from 'nanoid'
import { EventEmitter } from 'node:events'

import { ServerError } from '../ServerError.js';


export const userEvents = new EventEmitter()

const users = [];
let id = 1;

export const usersService = {

    async addUser(userDto) {
        delete userDto.id;
        delete userDto.uuid;

        const user = {
            id: id++,
            uuid: nanoid(),
            ...userDto
        }
        users.push(user)
        userEvents.emit('new-user-inserted', user);
        return user;
    },
    async getAll(name = '') {
        return users.filter(u => u.name.toLowerCase().startsWith(name.toLocaleLowerCase()));
    },
    async getByUuid(uuid) {
        const user = users.find(u => u.uuid === uuid);
        if (!user) {
            throw new ServerError(`User with uuid ${uuid} not found`, 404)
        }
        return user;
    },
    removeUser() { }

}