import knex from './knex-client.js';

console.log(`
	Witaj w programie!
`)

function program() {
	knex('users')
		.then(users => {
			console.log('lista użytkowników:')
			console.table(users);
			return knex('orders')
		})
		.then(orders => {
			console.log('lista zamówień:')
			console.table(orders);
		})
		.catch(err => {
			console.log(err);
		})
		.finally(() => knex.destroy())
}

program();
