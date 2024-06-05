/**
 * Na dłuższą metę, nie możemy robić takiej ogromnej instrukcji 'switch'
 *
 * To by było ciężkie w utrzymaniu i natychmiast by "spuchło".
 *
 * Jaka jest alternatywa ?!
 *
 * Chociażby - poglądowo sprawdźmy: "Dynamiczne składanie obiektów"
 * Można je tutaj wykorzystać.
 *
 * Klucz obiektu (property) to końcówka adresu, natomiast value (wartość)
 * To tekst który chcemy wysłać...
 *
 *
 * Całość wygląda następująco:
 */

const http = require('http');
const PORT = 3033;

// Pomocniczy obiekt websites - aby uniknąć instrukcji "switch"
const websites = {};
websites['/'] = '<h1>Witaj na mojej stronie :)</h1>';
websites['/cars'] = '<h1>Lista nowych samochodów:</h1>';
websites['/date'] = 'Dzisiejsza data to:' + new Date();
// Ta data zachowa się inaczej niż w poprzednich przykładach - czy widzisz czemu ?

const server = http.createServer((req, res) => {
	const { url } = req;
	// Używamy tutaj naszego logicznego OR ponieważ jeśli property obiektu nie istnieje - to jest to undefined !
	const websiteText = websites[url] || `<span style="color: red">nie mam strony o adresie: ${url} !!!</span>`;

	// Teraz złożenie strony jest prostsze:
	const myHTML = `
		<!DOCTYPE html>
		<html lang="pl">
		<head>
		    <meta charset="UTF-8">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		    <title>Moja strona: ${url}</title>
		</head>
		<body>
			${websiteText}
		</body>
	</html>
	`
	res.write(myHTML);
	res.end();
})

server.listen(PORT);
server.on('listening', () => {
	console.log('Serwer - który wysyła tekst ze znaczkami HTML nasłuchuje na porcie:', PORT);
})
