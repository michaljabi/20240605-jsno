/**
 * process
 *
 * daje nam dostęp do 2 strumieni
 *
 * wyjście:
 * process.stdout
 *
 * wejście:
 * process.stdin
 *
 * */

// Jeśli chodzi o wyjście to korzysta z niego console.log...
// I zapisuje treści
console.log('Podaj słowo:')
// to pod spodem:
process.stdout.write('Podaj słowo:\n');

// Nasłuchiwanie strumienia wejścia
process.stdin.on('data', chunk => {
	// przekształcenie porcji danych na stringa bez znaku końca linii (\n).
	const word = chunk.toString().trim();
	const length = word.length;
	console.log(`Słowo "${word}", posiada ${length} litery!`);
	// zamknięcie programu:
	process.exit()
})

/*
	 Zauważ, że nasłuchiwanie na event "data" spowodowało że program stał się "nieskończony".
	 Nie zamknie się sam z siebie.
	 Zauważysz to jeśli zakomentujesz linię 27, która odpowiada za prawidłowe zamknięcie programu.

	 Dzieje się tak dlatego - że Node - nie ma pojęcia kiedy przyjdzie "data".
	 Nasz "Event Listener" - czeka cierpliwie na "chunk".
 */
