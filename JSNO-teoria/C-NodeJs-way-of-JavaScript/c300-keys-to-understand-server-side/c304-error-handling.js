/*
* W poprzednim przykładzie, obsługujemy tylko "Wesołą ścieżkę"...
*
* .. niestety rzeczywistość jest trochę bardziej skomplikowana, możemy dostać błąd odczytu z bazy,
* albo innego rodzaju błędy !
*
* Trzeba jeszcze dopisać obsługę tych błędów:
* */

async function runCode() {
	try {
		const data = await queryDB('SELECT * FROM vegetables');
		console.log(data);
		await queryDB('SELECT * FROM fruits')
	} catch( dbError ) {
		console.log(dbError.message);
	}
}
runCode();


async function queryDB(queryString) {

	if(queryString === 'SELECT * FROM vegetables') {
		return [
			{ id: 1, name: 'onion', amount: 12 },
			{ id: 2, name: 'tomato', amount: 33 }
		];
	}
	throw new Error(`DB query error! cannot perform "${queryString}"`)
}
