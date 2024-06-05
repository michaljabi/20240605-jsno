/**
 * funkcje fs idealnie wpasowują się w model Promise,
 *
 * dzieje się tak dlatego, że każda z poznanych przez nas operacji - może się nie udać
 * Sprawdźmy odpowiednik promise, zapisu loga programu, razem z odczytem danych i sprawdzeniem dostępu
 * */

const path = require('path');
const fs = require('fs/promises'); // zwróć uwagę na /promises - importujemy inny "rodzaj" biblioteki fs.

const logFilePath = path.resolve(__dirname, 'program.log');
fs.access(logFilePath)
	.then(() => {
		 return fs.readFile(logFilePath, 'utf8').then(data => data.split('\n').length)
	})
	.then(numberOfLines => {
		const info = `- [${new Date().toISOString()}] Program został uruchomiony po raz #${numberOfLines}.\n`;
		console.log('Dopisuje...', info)
		return fs.writeFile(logFilePath, info, {flag: 'a'})
	})
	.catch(err => {
		console.error('Wystąpił błąd...', err)
	})
