/**
 * Czas na utworzenie serwera, który w zależności od końcówki adresu,
 * Wyświetli odpowiednie dane jednak jako HTML, czyli w tym układzie,
 * będzie poprawnie wyświetlał znaki Polskie (dzięki UTF-8)
 *
 * I w ogóle obsłużymy HTML.
 *
 * Zwróć uwagę na jedną rzecz
 * To co my tutaj wysyłamy - to ZWYKŁY CIĄG ZNAKÓW!!!
 * po prostu: string.*
 * Zadziała to jednak jako strona w przeglądarce
 * Pamiętajmy, że HTML to po prostu "sposób pisania tekstu" - który interpretuje przeglądarka.
 *
 * Równie dobrze zamiast "zahardkodowanych" treści - moglibyśmy wysłać konkretne teksty z otwartych plików.
 * To znaczy: czytamy plik za pomocą fs, i wysyłamy do klienta jako string.
 *
 * To co widzimy poniżej to uproszczony przykład dynamicznie generowanych treści dla przeglądarki.
 */

const http = require('http');
const PORT = 3032;
const server = http.createServer((req, res) => {
	const url = req.url;

	let myHTML = `
		<!DOCTYPE html>
		<html lang="pl">
		<head>
		    <meta charset="UTF-8">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		    <title>Moja strona</title>
		</head>
		<body>
	`

	switch (url) {
		case '/':
			myHTML += '<h1>Witaj na mojej stronie :)</h1>';
			break;
		case '/cars':
			myHTML += '<h1>Lista nowych samochodów:</h1>';
			break;
		case '/date':
			myHTML += 'Dzisiejsza data to:' + new Date();
			break;
		default:
			myHTML += `<span style="color: red">nie mam strony o adresie: ${url} !!!</span>`;
	}

	myHTML += `
		</body>
	</html>
	`
	res.write(myHTML);
	res.end();
})

// Nasłuchiwanie:
server.listen(PORT);
server.on('listening', () => {
	console.log('Serwer - który wysyła tekst ze znaczkami HTML nasłuchuje na porcie:', PORT);
})

/*
		http://localhost:3031/
		http://localhost:3031/cars
		http://localhost:3031/date

		Każdy inny adres uznawany jest za niepoprawny np.
		http://localhost:3031/blah
*/
