import express from 'express'
import session  from 'express-session'
import { engine }  from 'express-handlebars'
import { dbConnection } from './fake-db/tasks.js'

const app = express();

app.use(session({
	name: 'my-session',
	secret: 'IUDT&^%^&D%W*QHD*&%^&WQ%6q4w65wr65q4452356',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false }
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

	if(req.session.user) {
		const {name} = req.session.user;
		res.render('welcome', {title: 'Strona domowa', userName: name});
	} else {
		res.render('home', {title: 'Logowanie'});
	}
})

app.post('/', (req, res) => {

	const login = req.body.login;
	const password = req.body.password;
	if(login === 'test' && password === '1234') {
		req.session.user = { name: 'Test User', id: 1 }
		res.render('welcome', {title: 'Strona domowa', userName: 'Test User'});
	} else {
		res.render('home', {
			title: 'Niepowodzenie logowania...',
			errorMessage: 'Niestety podano nieprawidłowe hasło / login...'
		});
	}
})

app.post('/log-out', (req, res) => {
	delete req.session.user;
	res.redirect('/');
})

app.get('/tasks', (req, res) => {

	if(req.session.user) {
		dbConnection.getTasks()
			.then(tasks => {
				res.render('tasks', { tasks  });
			})
			.catch(error => {
				res.render('tasks', { error: error.message  });
			})
	} else {
		res.redirect('/');
	}
})

export default app;
