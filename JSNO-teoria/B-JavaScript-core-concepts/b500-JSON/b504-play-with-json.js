/**
 * w Node.js mamy specjalną własność dla plików .json
 *
 * Po ich załadowaniu przez require() - Node.js od razu parsuje je do JavaScript.
 *
 * Minusem takiego dodania danych z pliku do programu,
 * jest fakt iż zostaną one zainicjowane ze stanem w momencie startu programu.
 * Innymi słowy, jeśli w trakcie działania naszego programu ktoś zaktualizuje plik `./b505-sample.json`
 * My dalej będziemy mieli jego stare wartości (z momentu startu programu).
	*/

const myData = require('./b505-sample.json');

console.log(myData);
// chwila, to nie STRING !?!
console.log(typeof myData);


// W tym układzie mamy dostęp do użytkowników:
console.log(myData.users);

// Skoro to tablica to możemy po nich iterować:
for(let user of myData.users) {
	console.log(user)
}

// i wyciągać dane, na przykład ich imiona:
for(let user of myData.users) {
	console.log(user.name);
}
