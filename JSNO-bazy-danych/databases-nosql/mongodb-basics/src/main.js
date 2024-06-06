const { MongoClient } = require('mongodb');
const url = 'mongodb://root:1234!@localhost:27017';

const client = new MongoClient(url);
client.connect()
	.then(() => {
		console.log('Connected successfully to MongoDB');
		startServer()
	})
	.catch(err => {
		 console.error(err);
	})

function startServer() {
	// Tutaj potencjalnie możemy rozpocząć nasłuchiwanie serwera (app z express.js !)
	const db = client.db('myNewDB');
	const usersCollection = db.collection('users')
	usersCollection.find()
		.toArray()
		.then(user => {
			if(user.length === 0) {
				return usersCollection.insertOne({name: 'Mike', email: 'mike@mymail.com'})
			}
			console.log('User w bazie:', user)
		})
		.then(() => {
			client.close()
		})
}
