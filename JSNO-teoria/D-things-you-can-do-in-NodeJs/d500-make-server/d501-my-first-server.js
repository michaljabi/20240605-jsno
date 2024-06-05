/**
 *
 * Utworzenie serwera w Node.js jest niesamowicie proste.
 * Służy do tego natywna biblioteka http
 *
*/

// Użycie biblioteki http:
const http = require('http');
// Ustalamy pomocniczą stałą z konfiguracją portu:
const PORT = 3030;

// Tworzymy obiekt serwera
const server = http.createServer(function (request, response) {
	// Zauważ że ta funkcja to callback.
	// Dopiero jest to jej wyrażenie - co oznacza że jeszcze się nie wykonała !

	// KIEDY SIĘ WYKONA ?
	// Dopiero jak po uruchomieniu programu, odwiedzimy stronę: http://localhost:3030

	// URUCHOMI się za każdym razem jak ktoś wejdzie na ten adres !

	response.write('Witaj na serwerze!');
	response.end();
})

// Nasłuchujemy na zdefiniowanym porcie!
server.listen(PORT);

// Metoda .on na serwerze - służy do rejestrowania "listenerów"
// Czyli funkcji - callbacków które mają się wykonać jeśli wystąpi konkretny nazwany event:
server.on('listening',  () => {
	console.log('Serwer poprawnie ustawiony, nasłuchuje na procie:', PORT);
})

// Tutaj przykład co się stanie jeśli wystąpi error:
server.on('error',  (err) => {

	if(err.code === 'EADDRINUSE') {
		console.log('Nie udało się ustawić serwera, niestety port:', PORT, 'Jest ZAJĘTY');
	} else {
		console.log('Wystąpił nieznany błąd !', err)
	}
})

// A teraz ciekawostka:
// Gdziekolwiek i jakkolwiek wejdziemy na stronę, zawsze pokaże ona `Witaj na serwerze!` jeśli serwer
// jest uruchomiony poprawnie.

/*
		Sprawdź to używając:

		http://localhost:3030/
		http://localhost:3030/ok
		http://localhost:3030/other/things
*/
