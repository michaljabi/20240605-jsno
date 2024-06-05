/**
 * Zobaczmy jeszcze działanie fs.unlink - do usuwania plików.
 *
 * Możliwe są jeszcze inne operacje do usuwania:
 * fs.rm
 * fs.rmDir
 *
 * Warto spojrzeć na dokumentacje całości biblioteki fs:
 * https://nodejs.org/dist/latest-v14.x/docs/api/fs.html
 *
 * Jest tam jeszcze masa operacji możliwych na plikach
 * */

const path = require('path');
const fs = require('fs');

const data = {users: [{name: 'Jan', email: 'jan@example.com'}]};
const dataAsJSON = JSON.stringify(data, null, 2);

const myDataPath = path.join(__dirname, 'users.json');

// Najpierw tworzymy i po 5 sekundach usuwamy plik users.json
fs.writeFile(myDataPath, dataAsJSON, (err) => {
	if(err) {
		console.error('Nie udało się utworzyć pliku', err);
	}
	setTimeout(() => {
		fs.unlink(myDataPath, (err) => {
			if(err) {
				console.error('Nie udało sie usunąć pliku', err)
			}
		})
	}, 5000)

})
