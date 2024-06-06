import knex from '../knex-client.js';

// Chcemy pobrać listę wszystkich zamówień dla użytkownika o id: 1:

try {
	const orders = await knex('users').where({'users.id': 1}).leftJoin('orders', {'user_id': 'users.id'})
	console.table(orders);
	// Jednak zamiast tego, dostajemy "sprasowane dane",
	// To jak pobrać 3x usera z połączonym orderem.
	// Nic dziwnego, to zapytanie używa JOIN z języka SQL - i to poprawne działanie takiego zapytania.

	// Co jeśli jednak chcemy pobrać wszystkie zamówienia dla użytkownika w formie:
	// { ...user, orders: [ ... ] }

	// odpowiedź: w pliku the-orders-solution
} catch (error) {
	console.error(error)
} finally {
	await knex.destroy();
}
