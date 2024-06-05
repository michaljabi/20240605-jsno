/**
 * Serwer w Express.js jest bardzo poukładany
 *
 * Przede wszystkim determinujemy na jaką metodę: GET, POST, PUT, PATCH, DELETE etc... odpowiadamy
 * i na jakim konkretnie adresie
 *
 * Znów dostajemy 2 obiekty jako request oraz response,
 * jednak posiadamy w nich garść pomocnych pól — przygotowanych dla nas do obsługi zapytania
 * na konkretnym endpoint'cie.
 *
 * */

const express = require('express');
const app = express();
const PORT = 3034;

app.get('/', (req, res) => {
	res.send('Witaj na mojej stronie :)')
})
app.get('/cars', (req, res) => {
	res.send('Lista nowych samochodów:')
})
app.get('/date', (req, res) => {
	res.send('Dzisiejsza data to:' + new Date())
})
app.get('**', (req, res) => {
	res.send('nie mam strony o adresie: ' + req.url);
})

app.listen(PORT, () => {
	console.log('Serwer nasłuchuje na porcie:', PORT);
})

// Czas przetestować jak to działa:
/*
		Zgodnie z tym, co widzisz powyżej, serwer obsługuje adresy:
		http://localhost:3034/
		http://localhost:3034/cars
		http://localhost:3034/date

		Każdy inny adres uznawany jest za niepoprawny np.
		http://localhost:3034/blah

		I pokaże:
		nie mam strony o adresie: /blah
*/
