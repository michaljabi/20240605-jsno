import mongoose from 'mongoose';
import { User } from './models/User.js';

mongoose
	.connect('mongodb://root:1234!@localhost', {dbName: 'myNewDB'})
	.then(() => User.find())
	.then(users => {
		console.log(users)
		// Znajdź Userów, których imie zaczyna się na "m" i zwróć tylko pole "email"
		return User.find({name: /m*/i}, 'email').exec()
	})
	.then(usersM => {
		console.log('Znalazłem Userów:')
		console.log(usersM)
	})
	.catch(err => {
		console.log('Wystąpił błąd:')
		console.error(err)
	})
