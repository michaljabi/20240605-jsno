/**
 * Ponieważ JavaScript nie posiada tzw. twardego typowania
 * pozwala nam robić ze zmiennymi "co tylko nam przyjdzie do głowy"
 *
 * Złym pomysłem (przyzwyczajeniem) będzie tutaj:
 *  "dynamiczna zmiana typu zmiennej"
 *
 *  Słowem kluczowym "typeof" możesz łatwo zobaczyć jakiego zmienna jest typu prostego
 */

// najpierw string:
let helloWorld = 'Hello World'
console.log(helloWorld, 'is:', typeof helloWorld)

// potem number:
helloWorld = 12333
console.log(helloWorld, 'is:', typeof helloWorld)

// potem boolean:
helloWorld = true
console.log(helloWorld, 'is:', typeof helloWorld)

// potem undefined:
helloWorld = undefined
console.log(helloWorld, 'is:', typeof helloWorld)

/*
	Zróbmy krótkie - Code Review:

	Zauważ, że programista popełnia tutaj kardynalny błąd.
	Zmienia typ zmiennej w trakcie działania programu kilkukrotnie.

	1. To prawda - JavaScript nam na to pozwala i nie kontroluje tego wcale
	2. Mamy 2 rozwiązania:
			-> pilnować się i pisać testy + stosować zasadę "favor const over let"
			-> rzucić to wszystko i wyjechać w Bieszczady, a tak na serio: przejść na użycie TypeScript

	Używanie TypeScript - potraktujemy tutaj jako radykalne rozwiązanie - i nie zajmiemy się nim na tym szkoleniu.
	Jednak ważne jest wiedzieć:
		- da się to zrobić w Node.js to "zaledwie" jeden dodatkowy krok przed uruchomieniem kodu - tzw. transpilacja.

	Wracając do świata JS:
	- pilnowanie typu swoich zmiennych, najlepiej rozpocząć od zdradzenia swoich intencji już na początku.
*/

// zamiast pisać:
let userName;
// lub jeszcze gorzej:
let mySuperUserName = null;

// napisz:
let myUserName = '';

// Nie chodzi tutaj o nazwy zmiennych!
// Tylko o przypisanie wartości pustego stringa - sygnalizujące, czym spodziewamy się - że będzie myUserName!

// Podobnie będzie w przypadku typów złożonych:
let myUser = {
	name: '',
	age: 0,
	type: '',
	isVip: false
}

// Mamy tutaj do czynienia z pewną reprezentacją stanu danych.
// Od razu zdradzamy swoje intencje i pokazujemy kształt danych
