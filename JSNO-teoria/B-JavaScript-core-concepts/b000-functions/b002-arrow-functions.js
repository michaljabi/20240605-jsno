/**

 W 2015 roku do JS wprowadzony zostaje tzw. skrócony zapis funkcji: arrow functions.
 (w niektórych językach programowania mówi się o np. lambda expressions)

 Arrow functions poza skróconym zapisem posiadają jeszcze kilka własności:
 a) zawsze są anonimowe i zapisane jako wyrażenia
 b) jeśli możemy je zapisać w jednej linii jako poprawne wyrażenie, które oblicza się do wartości,
    wartość ta zostanie zwrócona jako wynik działania funkcji - bez konieczności użycia słowa kluczowego "return"
 c) nie zmieniają one kontekstu wywołania
    (słowo this zawsze wskazuje na miejsce, w którym funkcja została zadeklarowana - nie zależy od kontekstu)

 */

// Nowości ES6+ (po 2015r):
// dostajemy Arrow functions:
const newFunc = ( name ) => `Hello ${name}!`;
const newFunc2 = name => `Hello ${name}!`;
const newFunc3 = ( name ) => {
    return `Hello ${name}!`;
};

// Przypomnienie:
// Funkcja może zwracać inną funkcję:
function hello() {
    return () => 'World';
}

const innerFn = hello();
// Zadanie:
// Jak wyciągnąć wynik "World" ?


// Nowości z ES6:
// Możemy użyć tzw. rest operatora,
// żeby zdefiniować funkcję - która przyjmie N argumentów
function addAllNumbers(...numbers) {
    return numbers.reduce((a, b) => a + b,0)
}

const result = addAllNumbers(10, 8, 3);
console.log(result);

const result2 = addAllNumbers();
console.log(result2);

const result3 = addAllNumbers(8);
console.log(result3);
