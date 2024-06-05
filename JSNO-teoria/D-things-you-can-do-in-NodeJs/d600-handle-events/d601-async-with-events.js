/**
 * Node.js wspiera eventy.
 * Wskazuje na to między innymi fakt, że strumienie dziedziczą po eventach.
 * Dzięki natywnemu "events" Pozwala Ci robić własne.
 *
 * Dzięki temu masz możliwości komunikacji asynchronicznej.
 *
 * Przykładowo, miałeś plik cars.json.
 *
 * Wyobraźmy sobie, że chcesz ustawić serwer - ale DOPIERO jak odczytasz plik.
 * Jak to zrobić ?!
 *
 * Skorzystam tutaj z pliku n002-sample.json
 * */

// To jest nasz twórca szyny do komunikacji:
const EventEmitter = require('events');
const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3035;

// Tworzymy nową szynę komunikacyjną:
const eventBus = new EventEmitter();

// Nasłuchujemy eventu, że baza danych jest gotowa i spodziewamy się że dostaniemy odczytane przez nią dane
// służy do tego metoda .on();
// nazwanie eventu 'database-ready' to nasz pomysł (widoczny poniżej)
eventBus.on('database-ready', (dbData) => {
		// Ten event - świadczy o tym, że już mamy dane i je czytamy.
	  // więc możemy ustawiać serwer:
		const server = http.createServer((req, res) => {

			const url = req.url;
			switch (url) {
				case '/users':
					const usersAsString = JSON.stringify(dbData.users);
					res.write(usersAsString);
					break;
				default:
					res.write('nie mam strony o adresie: ' + url);
			}
			res.end();
		})
		server.listen(PORT);
		server.on('listening', () => console.log('Serwer nasłuchuje na porcie:', PORT));
})

// Teraz otwieramy plik d601-users-db.json i przekazujemy go jako dane w JS, emitując event !
const jsonFile = path.join(__dirname, 'd601-users-db.json');
fs.readFile(jsonFile, 'utf8', (err, data) => {
	if(err) {
		// Jeśli jest error - to kończymy działanie funkcji i robimy return!
		// Server nigdy nie wstanie bo nie będzie eventu!
		return console.log(err);
	}
	const myJSData = JSON.parse(data);
	// teraz mamy już dane jako JavaScript obiekt - wiec emitujemy event + dane:
	// służy do tego metoda .emit()
	eventBus.emit('database-ready', myJSData)
})

// Teraz czas sprawdzić ten przykład:
// http://localhost:3035/users

