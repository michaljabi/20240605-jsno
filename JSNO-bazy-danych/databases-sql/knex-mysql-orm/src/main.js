import knex from './knex-client.js';
import { User } from '../models/User.js';

console.log(`
	Witaj w programie - wariant ORM!
`)

function program() {
	User.query()
		.then(users => {
			console.log('lista użytkowników:')
			console.table(users);
			return User.query().where({id: 1}).first().withGraphFetched('[orders]')
		})
		.then(userWithOrders => {
			console.log(`lista zamówień Użytkownika ${userWithOrders.email}:`)
			console.log(userWithOrders);
			// może być bez widocznego hasła:
			// console.log('as string (no password):', JSON.stringify(userWithOrders));
			console.table(userWithOrders.orders);
		})
		.catch(err => {
			console.log(err);
		})
		.finally(() => knex.destroy())
}

program();
