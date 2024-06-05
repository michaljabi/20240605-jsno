/**

 Dlaczego funkcje są tak ważnym elementem ?

 Po 1 pozwalają one na "zamknięcie" części naszego kodu i wywołanie go w dowolnym momencie.
 Po 2 powodują iż nie musimy się powtarzać z kodem
 Po 3 możemy użyć ich własności do obsługi kodu asynchronicznego

 Pomimo tego, że JavaScript jest językiem zorientowanym obiektowo,
 obowiązuje tutaj zasada:
 - Function First Class Citizen

 co oznacza, że funkcje można:
 - przypisywać do zmiennych i stałych
 - przekazywać jako argumenty
 - zwracać jako wynik działania innej funkcji (funkcja zwraca funkcję)

 Funkcje są kluczowym składnikiem również jeśli chodzi o asynchroniczny kod w JS.

 */

/*-----------> PART 1: >---------------------------------*/

// Funkcja anonimowa, która posiada referencję "sumMyNumbers"
// Tylko dzięki niej (stałej) - możemy się do niej później odwołać!
const sumMyNumbers = function(a = 0, b = 0) {
    return a + b
}

console.log(sumMyNumbers())
console.log(sumMyNumbers(10, 20))


/*-----------> PART 2: >---------------------------------*/

// Hmmm... skoro funkcje możemy traktować jak zwykłe "wartości" np.
let sampleNumber = 10
// To powinniśmy je również móc przekazać jako parametr w funkcji:

const sayHello = function() {
	console.log('Hello John!')
}
// Zapis powyżej to tzw. "Function expression" - wyrażenie funkcji
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function

function greetings(sayHelloFn, luckyNumber) {
	sayHelloFn()
	console.log('Your lucky number is', luckyNumber)
}
// Zapis powyżej to tzw. "Function declaration" - deklaracja funkcji
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function

greetings(sayHello, sampleNumber)


/*-----------> PART 3: >---------------------------------*/

// Hmmm... skoro funkcja przyjmuje funkcje to może ją też zwracać!?

function welcome() {
	return function() {
		console.log('Welcome stranger')
	}
}

// Najważniejsze jest zrozumienie że sam zapis:
const greetingsFn = function() {
	return 'hello';
}

// To jeszcze nie wywołanie funkcji!
// Co w skrócie oznacza, że funkcja te nie wykonała się jeszcze ani razu...
// Jest to jedynie tzw. "wyrażenie funkcji" - zapis różni się od deklaracji
// Jednak zasada działania jest podoba

function greetingsDeclaration() {
	return 'hello 2';
}

/*
	Tutaj mamy deklaracje - ona też nie została jeszcze wywołana.
  w skrócie: kod z linii 68 i 77 jeszcze nie miał szans na wykonanie
*/

// Uruchommy więc nasze funkcje
// (odkomentuj kod poniżej)

// greetingsFn();
// greetingsDeclaration();

/*
* Poniżej kawałek kodu z user potrzebny do przykładu
* objaśnionego poniżej
* */
const user = {
	name: 'Dorothy',
	getTheName(callbackFn) {
		callbackFn(this.name)
	}
}

/*
* Te zagadnienia są dość proste i oczywiste,
* jednak okazuje się, że ten sam zapis (wyrażenia funkcji) - występując w postaci
* argumentu przekazywanego np. do metody - może wywołać zakłopotanie.
* */

user.getTheName(function (userName){
	 console.log('My name is', userName);
});
// Samo zapisanie funkcji w ten sposób to tak samo: wyrażenie funkcji
/*
* funkcja ta nie wywołała się jeszcze - decyduje o tym obiekt user
* a dokładniej metoda getTheName posiadająca parametr "callbackFn"
* jeśli nie użyje ona callbackFn - nasz kod nigdy się nie wywoła.
*
* podobnie callbackFn z linii :97
* może być wywołany N razy, wtedy kod z linii :109 będzie wykonany N razy
* */

// Można to również zapisać w sposób bardziej zwięzły, używając arrow function
user.getTheName(name => {
	console.log('Her name is', name)
})
