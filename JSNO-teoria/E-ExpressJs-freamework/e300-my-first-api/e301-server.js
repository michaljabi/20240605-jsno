/**
 * W tym przykładzie chce Ci pokazać ze API można zrobić ze wszystkiego.
 * ... no może nie ze wszystkiego
 *
 * To znaczy z dowolnego programu czy koncepcji która przyjdzie Ci do głowy.
 *
 * W tym przypadku zrobimy listę zakupów.
 *
 * Wszystko zaczyna się od programu.
 * Robimy program obsługujący listę zakupów.
 * Na razie — uproszczoną, można na nią wpisać zakup i określić czy został kupiony czy nie.
 *
 * Chcę to jednak zrobić 1:1 zgodnie ze sztuką, wobec tego tutaj będzie tylko serwer
 * a nasza aplikacja, będzie w oddzielnych plikach.
 * */

const express = require('express');
const cors = require('cors');
const { initList, findItems, addToList } = require( './shopping-list' )
const app = express();
const PORT = 3036;

// Musimy mieć taki zapis, żeby express mógł odczytywać BODY w POST:
app.use(express.json());
// Cors jest potrzebne żeby był dostęp do API dla każdego
// Chodzi o to żeby nasze strony .html z tego przykładu działały poprawnie dla fetch();
app.use(cors());

// Inicjuję listę zakupów:
initList([
	'pasta do butów',
	'ołówek',
	'masło'
])

app.get('/', (req, res) => {
	res.json({
		message: 'goto address /list or /add with POST'
	})
})

app.get('/list', (req, res) => {

	// Najpierw sprawdzam czy jest w "searchParams" filterBy, w express JS nazywa się to "query"
	const filterBy = req.query.filterBy || '';
	// Jest to bezpieczny zapis ponieważ req.query zawsze zwraca obiekt, nawet jeśli nie ma searchParams,
	// to w najgorszym wypadku dostaniemy pusty obiekt;
	// Z kolei jeśli filterBy nie byłoby zdefiniowane to daje nam to undefined
	// ale nasz zapis z || upewnia nas że w najgorszym wypadku filterBy to pusty string!
	const items = findItems(filterBy);
	res.json(items)

	// spróbuj np:
	// http://localhost:3036/list
	// http://localhost:3036/list?filterBy=as
	// http://localhost:3036/list?filterBy=m
})

app.post('/add', (req, res) => {

	// Sprawdzamy body zawiera wymagane name:
	const { name } = req.body;

	// Jeśli nie zwracamy błąd (ale serwerowo, czyli status + message)
	if(!name) {
		 //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
		 // Dajmy znać ze to 400  - czyli bad request (no bo nie ma name w body!)
		 return res.status(400).json({message: 'Sorry, `name` in body is missing...'})
	}
	addToList(name);
	res.json({message: 'OK'})
})

app.listen(PORT, () => {
	console.log('Serwer nasłuchuje na porcie:', PORT);
})

