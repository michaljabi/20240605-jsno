/*
* Jedna z podstawowych operacji na serwerze, związana z asynchronicznym przebiegiem
* to dostęp do bazy danych.
*
* W zależności od API dostępowego do DB, korzystamy wtedy albo z callbacks, albo z promises.
* */

async function runCode() {
		const data = await queryDB('SELECT * FROM vegetables');
		console.log(data)
}
runCode();


async function queryDB(queryString) {
		return [
			{ id: 1, name: 'onion', amount: 12 },
			{ id: 2, name: 'tomato', amount: 33 }
		];
}
