/**
	Więcej o JSON:

	+ dokumentacja:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
*/

// Na początek coś prostego.
// Mamy obiekt:

const user = {name: 'Michał'};

console.log(user);
// sprawdźmy czy to na 100% obiekt:
console.log(typeof user);
// Tak, to na pewno obiekt !

// teraz czas go przerobić na JSONa:
// Służy do tego specjalny obiekt JSON wbudowany i w Node.js i w Przeglądarkę:
const userString = JSON.stringify(user);

console.log(userString);
// sprawdźmy czy to na 100% string:
console.log(typeof userString);
// Tak, to na pewno string !
// W tym układzie, za równo property obiektu "name" jak i wartość "Michał"
// zostały otoczone cudzysłowami ""

// Teraz, co się stanie z innymi typami danych w JSON ?:
const otherTypes = {
	myNumber: 123,
	myBoolean: false,
	myString: 'Hello',
	nullValue: null,
	notDefined: undefined,
	myMethod() {
		return 'method!'
	}
}

const otherTypesString = JSON.stringify(otherTypes);
console.log(otherTypesString);

// Co zauważamy:

// 1. Każde z pól-kluczy (property) w obiekcie zostaje otoczone w cudzysłowy
// 2. Metoda - znika, nie ulega serializacji do JSON - zostaje dosłownie zgubiona!
// 3. Pole "notDefined" - znika, ponieważ nie ma wartości, jest undefined specjalnie
// 4. Number, Boolean, null - nie zostają opakowane w cudzysłowy !!

// Czyli jeśli to rozpakujesz znów zobaczymy co mamy:
const giveMyObjectBack = JSON.parse(otherTypesString);
console.log(giveMyObjectBack)

// Jak zachowują się Daty po serializacji do JSON ?!
const today = new Date();
console.log(today.toString());

const myClock = {
	theDate: new Date()
}
console.log(myClock instanceof Object);
console.log(myClock.theDate instanceof Date)
// Teraz widzimy, że to na pewno obiekt Date.

console.log(myClock);

const myClockJSON = JSON.stringify(myClock);
// No i co mamy:
console.log(myClockJSON);
// Data została konwertowana na format ISO i jest zapisana jako UTC !!!!
// JSON.stringify robi to z automatu
// Dodatkowo jest opakowana w cudzysłowy co sugeruje że to już nie Date tylko string.

// Nie pozostaje nam nic innego żeby odwrócić ten stan:
const myClockIsBack = JSON.parse(myClockJSON);
console.log(myClockIsBack);

// Chwila!? theDate, po powrocie jest dalej stringiem!
console.log(myClockIsBack.theDate instanceof Date)
console.log(typeof myClockIsBack.theDate)

// korzystając z takiej własności dla Date:
console.log(new Date('2020-11-01T11:11:00Z'));
// Wykonujemy:
myClockIsBack.theDate = new Date(myClockIsBack.theDate);

// I teraz:
console.log(myClockIsBack)
console.log(myClockIsBack.theDate instanceof Date);
// Dostajemy z powrotem datę - skonwertowaną na czas lokalny.
