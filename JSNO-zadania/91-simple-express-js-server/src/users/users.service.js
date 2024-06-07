import { nanoid } from 'nanoid'


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
        return user;
    },
    async getAll(name = '') {
        return users.filter(u => u.name.toLowerCase().startsWith(name.toLocaleLowerCase()));
    },
    async getByUuid(uuid) {
        const user = users.find(u => u.uuid === uuid);
        if (!user) {
            throw new Error(`User with uuid ${uuid} not found`)
        }
        return user;
    },
    removeUser() { }

}