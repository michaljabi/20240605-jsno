/**
 * Wiemy, że w Node.js nie mamy dostępu do głównego globalnego obiektu w JavaScript po stronie przeglądarki
 * = window
 *
 * Czy istnieje więc element, który pozwala nam odnieść się do przestrzeni globalnej w Node.js ?
 *
 * Tak!
 * z tym że tutaj nazywa się on
 * = global
 *
 * sprawdźmy jak działa:
 * PS. warto nie używać do uruchomienia tego przykładu Quokka.js
 * - ponieważ narusza ona przestrzeń globalną wykonywanych skryptów i może powodować inne (niż faktyczne w Node.js) wyniki.
 *
 * */

// bez "use strict" ten zapis powinien "zadziałać" i wrzucić hello do przestrzeni globalnej
hello = 'World';

console.log(global)

console.log(global.hello)

// W ES-next dostajemy nowość w postaci globalThis
// Przechowuje on obiekt globalny niezależnie od platformy
/*
* Innymi słowy:
* 1. W przeglądarce
* globalThis === window
*
* 2. W NodeJs
* globalThis === global
* */
console.log('Sprawdzam.... i:', globalThis === global);
