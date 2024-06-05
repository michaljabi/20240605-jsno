const readline = require('node:readline');

const readInput = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log(`

		WITAJ w programie do obliczania długości boku "c" w trójkącie pitagorejskim.
		----------------------------------------------------------------------------
`)


readInput.question('Podaj długość boku a=', a => {

	readInput.question('Podaj długość boku b=', b => {

		const result = Math.sqrt(a**2 + b**2);

		console.log(`Bok c=${result}`);

		readInput.close();
	});
});
