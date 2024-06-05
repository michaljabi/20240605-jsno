/**
 * Zacznijmy od czegoś prostego:
 * (na co każdy programista JS był "skazany" przed 2015r.).
 *
 * Jak tworzyć nowe obiekty w JavaScript osiągając funkcjonalność rodem z klas?
 * */


// Najprostszy sposób to metoda konstruująca:
function makeUser(name, lastName, email) {

	return {
		name: name,
		lastName: lastName,
		email: email
	}
}

const mike = makeUser('Mike', 'Doe', 'mike.doe@example.com');

console.log(mike)

// Można również imitować zachowanie klasy, używając kontekstu
// (zwróć uwagę na słowo "this")

function User ( name, lastName, email ) {
	this.name = name;
	this.lastName = lastName;
	this.email = email;
}

const jenna = new User('Jenna', 'Doe', 'jenna.doe@example.com');

console.log(jenna)
