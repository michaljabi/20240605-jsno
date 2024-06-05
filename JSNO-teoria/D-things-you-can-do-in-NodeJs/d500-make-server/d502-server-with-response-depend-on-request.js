/**
 * Czas na utworzenie serwera, który w zależności od końcówki adresu,
 * Wyświetli odpowiednie dane...
 */

const http = require('http');
const PORT = 3031; // Zmieniam port na 3031 żeby się "nie gryzły" w razie czego.
const server = http.createServer((req, res) => {
	  // Pobieram końcówkę adresu URL:
	  const url = req.url;

	  // W zależności od końcówki - odpowiadam:
	  switch (url) {
		  case '/':
			  res.write('Witaj na mojej stronie :)');
		  	break;
		  case '/cars':
			  res.write('Lista nowych samochodów:');
		  	break;
		  case '/date':
			  res.write('Dzisiejsza data to:' + new Date());
			  break;
		  default:
		  	res.write('nie mam strony o adresie: ' + url);
	  }
	  res.end();
})

// Nasłuchiwanie:
server.listen(PORT);
server.on('listening', () => {
	console.log('Serwer nasłuchuje na porcie:', PORT);
})

/*
		Zgodnie z tym co widzisz powyżej, serwer obsługuje adresy:
		http://localhost:3031/
		http://localhost:3031/cars
		http://localhost:3031/date

		Każdy inny adres uznawany jest za niepoprawny np.
		http://localhost:3031/blah

		I pokaże:
		nie mam strony o adresie: /blah
*/
