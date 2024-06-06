import knex from '../knex-client.js';

// W tym układzie mamy 2 zapytania:
// Jednak zamówienia będą w property { ..., orders: []}
// dla obiektu computedUser.

try {
	const user = await knex('users').where({id: 1}).select('email', 'id').first();
	const orders = await knex('orders').where({user_id: 1}).select('name', 'date')
	const computedUser = {
		...user,
		orders
	}
	console.log(computedUser);
	console.table(computedUser.orders);
} catch (error) {
	console.error(error)
} finally {
	await knex.destroy();
}

/*
* Nie zmienia to jednak faktu, iż posiadamy globalny problem,
* w którym musimy dokładnie pamiętać o zależnościach pomiędzy obiektami
*
* oraz o tym co pobieramy.
*
* Na dłuższą metę - jest to bardzo uciążliwe,
* powoduje konieczność pisania masywnej ilości kodu i zapytań SQL
* pilnowania się ze składnią
* analizowania bieżących zależności pomiędzy modelami obiektów w bazie.
*
* Potrzeba nam jeszcze lepszego rozwiązania... bardziej generycznego
*
* Jest nim: podejście z zastosowaniem biblioteki ORM !!
* (Object Relational Mapping)
* */
