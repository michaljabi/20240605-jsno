/**
 * fs posiada metody do zapisywania i dopisywania wartości do plików.
 * */

const fs = require('fs');
const path = require('path');

const myNewFile = path.resolve(__dirname, './new-file.txt');
const data = `Przykładowe
	dane
	w
pliku...
`
// Zapisujemy przygotowane dane w pliku.
// Jeśli plik już istnieje - zostanie nadpisany
fs.writeFile(myNewFile, data, (err) => {
	if(err) {
		console.error('Nie udało sie zapisać pliku', err);
	}
})

// Możemy również uruchomić tryb "dopisywania danych do pliku" (a'la log)
const logFilePath = path.resolve(__dirname, 'program.log');
const info = `- [${new Date().toISOString()}] Program został uruchomiony.\n`;
fs.writeFile(logFilePath, info, {flag: 'a'}, err => {
	if(err) {
		console.error('Nie udało sie zapisać loga...', err);
	}
})
