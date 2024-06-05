const express = require('express');
const app = express();
const PORT = 3060;

// bez tego express nie potrafiłby odczytać "body" wysłanego z formularza przez POST
app.use(express.urlencoded({ extended: true }));

let todoList = [
	{title: 'Zrób porządki', done: false},
	{title: 'Poucz się JavaScriptu', done: true},
];
function addToDo(title, done = false) {
	todoList.push({title, done});
}

// Obsługa CORS za pomocą własnego middleware
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
	next();
})


app.get('/', (request, response) => {

	console.log('Dostałem query:', request.query)
	const {type} = request.query;
	if( type === 'json') {
		return response.json(todoList)
	}
	response.send(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
				<title>Przykładowa stronka</title>
		</head>
		<body>
				<ul>
				   ${ 
							todoList.map(i => `<li> ${i.title} </li>`).join('') 
						}
				</ul>
		</body>
		</html>	
	`)
})


app.get('/add-todo', (request, response) => {
	response.send('Aby coś dodać wyślij POST :)')
})

app.post('/add-todo', (request, response) => {

	console.log('Mam body: ', request.body);
	// console.log('Mam header: ', request.headers);
	const { title } = request.body;

	addToDo(title);
	response.send('Dodałeś nowe todo: ' + title)
})

app.get('**', (req, res) => {
	res.send('nie mam strony o adresie: ' + req.url);
})

app.listen(PORT, () => {
	console.log('Serwer nasłuchuje na porcie:', PORT);
})
