import Redis from 'ioredis';
const redis = new Redis();

redis.get("myUser").then(user => {
	if(user === null) {
		const user = {name: 'Kasia', email: 'kasia@example.com', id: 1};
		console.log('Nie odnaleziono danych w myUser')
		console.log('Wpisuje nową wartość:', user)
		redis
			.set("myUser", JSON.stringify(user))
			.then((value) => {
				 if(value === 'OK') {
					 console.log( 'Wpisano!' )
				 }
			})
	} else {
		console.log('Użytkownik w Cache')
		console.log(JSON.parse(user));
	}
})
