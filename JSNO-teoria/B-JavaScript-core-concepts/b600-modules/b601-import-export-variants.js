/**
 * Zrozumienie działania składni import / export - wraz z zastosowaniem tzw. named oraz default exports.
 * Techniki re-eksportowania zawartości z kilku plików oraz tzw. namespaced imports
 * */


// Składnia import / export zostaje wprowadzona w 2015 roku. Razem z ES6

/*
	Aby przeglądarka traktowała skrypty w sposób "modułowy" pozwalając im nawzajem importować i eksportować rzeczy,
	musimy do tagu <script> w HTML dodać: atrybut target="module".
	Sprawdź przykład: ./b602-import-export-variants-module
*/

/*
	NodeJs traktuje pliki jako oddzielne moduły - jednak domyślnie używa składni CommonJS
	(require() / module.exports)
	aby używał moduły ES6 - musimy do pliku package.json dodać opcję: "type": "module",
	wtedy NodeJs obsłuży składnię:
	(import / export)
*/

// W modułach ES6 wyróżniamy 3 główne rodzaje eksportowania i importowania:

// 1) Default export/import:
/*
	Exporter:
	\ - mocha-coffee-default.js -
		const coffeeName = 'Mocha';
		export default coffeeName;


	Importer musi tutaj zdecydować jak będzie się nazywała zmienna / stała - którą importuje.
	Jest to jego decyzja - na którą exporter nie ma wpływu
	Importer:
	\ ---
*/
import coffee from './b601-import-export-variants/mocha-coffee-default.js';
console.log('Jak ja lubię moją', coffee);

// 2) Named export/import:
/*
	Exporter:
	\ - mocha-coffee.js -
		export const coffeeName = 'Mocha';


	Importer musi zaimportować konkretną nazwę zmiennej / stałej - którą wystawia exporter.
	Nie ma wpływu na jej nazwę, jedyne co może zrobić - to ją "przezwać" inaczej aby uniknąć kolizji nazw
	Jednak musi zawsze użyć konkretnej nazwy (dlatego NAMED) rzeczy, którą importuje.
	Importer:
	\ ---
*/
import { coffeeName } from './b601-import-export-variants/mocha-coffee-named.js';
console.log('Jak ja lubię moją', coffeeName);

// 3) Namespace import:
/*
	Exporter:
	\ - mocha-coffee-namespaced.js -
		export const MOCHA = 'Mocha';
		export const ESPRESSO = 'Espresso';


	Importer zbiera w ten sposób wszystko co jest wyeksportowane w Exporter'ze
	Tworzy w ten sposób przestrzeń nazw `coffees` zawierającą wszystkie eksportowane rzeczy
	`coffees` zachowuje się jak obiekt JS posiadający nazwy pól takie jak nazwy eksportów
	Importer:
	\ ---
*/
import * as coffees from './b601-import-export-variants/mocha-coffee-namespaced.js';
console.log('Jak ja lubię moją', coffees.MOCHA);

// dodatkowo możemy przezywać importy, jeśli mamy kolizję nazw, przykładowo:
/*
	Importer:
	\ ---
*/
import { coffeeName as otherCoffee } from './b601-import-export-variants/mocha-coffee-named.js';
console.log('Jak ja lubię moją inną', otherCoffee);

// Exporter, ma prawo eksportować tylko jeden default !
// Może jednak eksportować za równo default jak i zero/jeden/kilka named eksportów
// Jeśli będzie default + jeden named, import wygląda następująco:
/*
	Importer:
	\ ---
		import coffee, { coffeeName } from '......';
*/
