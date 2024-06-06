import mongoose from 'mongoose';
import { User } from './models/User.js';

try {
	await mongoose.connect('mongodb://root:1234!@localhost', { dbName: 'myNewDB' });

	const users = await User.find();
	console.log(users);
	// Znajdź Userów, których imie zaczyna się na "m" i zwróć tylko pole "email"
	const usersM = await User.find({ name: /m*/i }, 'email').exec();
	console.log('Znalazłem Userów:');
	console.log(usersM);
} catch( err ) {
	console.log('Wystąpił błąd:');
	console.error(err);
}
