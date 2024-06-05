/**
 *
 * Bardzo istotnym elementem zachowania modułów jest ich sposób zachowania jeśli importujemy coś kilka razy.
 *
 * Chodzi o to, że zarówno w es6 modules, jak i w CommonJS, który zobaczymy tutaj niżej.
 * Kod w pliku wykonuje się tylko RAZ !
 * niezależnie od tego ile razy i gdzie go importujemy.
 *
 * Jeśli importujemy plik N razy — to on wykona się tylko za 1 razem, a pozostałe N importów,
 * zwróci jedynie to — co plik eksportuje, bez ponownego wykonania jego kodu.
 *
 * Można w dużym skrócie / uproszczeniu stwierdzić, że moduły to "Singletony" - tak się zachowują.
 *
 *
 * Zobaczmy to w praktyce.
 *
 * */

// #1. importujemy plik
// tutaj wykorzystujemy również zapis z ES6
// http://es6-features.org/#ObjectMatchingShorthandNotation
const { makeAShout } = require('./will-be-imported-many-times');

console.log(makeAShout('Jacek'));

require('./other-file-with-imports');

// #2. znów importujemy plik x2 (nie będąc zainteresowanymi tym co on sam eksportuje!):
require('./will-be-imported-many-times');
require('./will-be-imported-many-times');


/*
* Zwróć uwagę na przygotowane w plikach:
* ./other-file-with-imports.js
*  oraz
* ./will-be-imported-many-times
*
* console.log'i. Ile razy się wykonały? Sprawdź zawartości tych plików
* */
