/**
 * O ile nazwa pliku "main.js"
 * oaz umieszczenie go w katalogu "src"
 *
 * to konwencje w Node.js
 *
 * Tak, przygotowany plik "package.json" nie jest napisany samodzielnie i jest niezmiernie istotny.
 * Praktycznie za każdym razem kiedy budujemy nowy projekt w Node.js potrzebujemy pliku "package.json"
 *
 * Sprawuje on 2 główne funkcje z perspektywy projektu:
 * - trzyma listę zależności projektu (biblioteki do dev, oraz na produkcję)
 * - pokazuje pozostałym programistom i przypomina nam - jak korzystać z projektu,
 *   jak go uruchomić etc. używając skryptów napisanych przez developera w obiekcie "scripts" struktury .json
 *   pliku "package.json"
 *
 * To oczywiście nie wszystkie funkcje package.json - jednak pozostałe elementy (może poza "type": "module")
 * są istotne głównie z pkt. widzenia dystrybucji projektu jako OPEN-SOURCE'owa biblioteka NPM.
 *
 * W każdym razie, plik ten nie musi być przez nas pisany "od nowa"
 * Istnieje specjalna komenda z npm pozwalająca na szybkie wygenerowania tego pliku:
 *
 * Komenda do szybkiego generowania pliku package.json:
 * npm init -y
 *
 * flaga "-y" pozwala nam na uniknięcie pytań odnośnie nazwy projektu, autora, keywords etc.
 * - powoduje że wszystkie pola są ustawione domyślnie
 *
 * Można więc też tak: npm init
 * i odpowiadając na wszystkie pytania odnośnie package.json
 *
 * Oto logika działania naszego programu:
 * */

console.log(`                                      
 _____     _ _        _____       _     
|  |  |___| | |___   |   | |___ _| |___ 
|     | -_| | | . |  | | | | . | . | -_|
|__|__|___|_|_|___|  |_|___|___|___|___| program                                       
`)

const { hydrateState, addFruit, getAllFruits, removeFruitByName } = require('./in-memory-fruit-db');

hydrateState([
	'apple',
	'banana',
	'mango',
	'cherry',
	'lime',
	'papaya'
]);

addFruit('grapes')
removeFruitByName('lime')

console.log('You have got fruits')
console.table(getAllFruits())
