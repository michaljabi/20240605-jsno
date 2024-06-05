/**
 * Typy złożone to każdy typ obiektowy.
 * Ponieważ JavaScript jest językiem obiektowym i prototypowalnym,
 * występują tutaj 2 niecodzienne zjawiska:
 *
 * - nie potrzeba klas do tworzenia obiektów
 * - każdy typ złożony domyślnie dziedziczy swój prototyp po Object
 *
 * JEDNA Z BARDZIEJ WAŻNYCH KWESTII:
 * - typy złożone są przekazywane i przypisywane po przez Referencje!
 *   co innymi słowy oznacza, że są mutowane
 *   referencja będzie nas odprowadzała w to samo miejsce w pamięci
 *   * więcej o tym - poniżej.
 *
 * W JS występuje również podobne zjawisko jak w przypadku Java:
 * - każdy typ prosty ma swój odpowiednik obiektowy
 *
 * Ten fakt przydaje się przy pisaniu tzw. jawnego rzutowania typów.
 *
 *
 * Przykłady typów złożonych i ich właściwości:
 */


// Przykładowy pusty obiekt:
const empty = {};

console.log(empty);

// Obiekty mogą posiadać pola (tzw. properties) i wartości (values)

const user = {name: 'Andrzej'};

// Aby dostać się do pola trzeba użyć notacji z kropką:
console.log(user.name)
// value to w tym przypadku string (czyli polem typu złożonego - obiektu - jest typ prosty, string).

// Obiekt można dynamicznie rozwijać o nowe pola, na przykład:
user.lastName = 'Kowalski'

console.log(user);
console.log(user.lastName);

// properties można również usuwać specjalnym słowem kluczowym delete:
delete user.name;

console.log(user);

// Jedną z podstawowych Różnic pomiędzy typami prostymi a złożonymi jest:

// Typ prosty - przekazywany jest przez WARTOŚCI
// Typ złożony - przekazywany jest przez REFERENCJE !!!

// Co to w praktyce oznacza? sprawdźmy to:
const hello = 'Witaj';
console.log(hello === 'Witaj')
// wartość hello i 'Witaj' to to samo ! - dlatego to prawda (Boolean: true)

// Jednak jeśli zrobimy tak:
const pressure = {value: 10};
console.log(pressure === {value: 10})
// To nie są te same wartości ?!
// Nie, ponieważ mamy 2 różne obiekty.
// 1 obiekt utworzony został w linii 60 używając notacji { }
// 2 obiekt został utworzony w linii 61 jednak nie mamy do niego referencji... (zmiennej lub stałej która na niego wskazuje)
// Nie jest to to samo - ponieważ TO są inne obiekty w pamięci!

// W takim razie, żeby zobaczyć "true" musimy mieć 2 referencje skazujące na to samo:
const pressure2 = pressure;
console.log(pressure === pressure2); // teraz !

// co oznacza że pokazujemy na ten sam obiekt w pamięci, więc zapisanie tak:
pressure2.value += 2;
// spowoduje zmiany na obu referencjach: (bo obie tak naprawdę pokazują na to samo)
console.log(pressure)
console.log(pressure2)


// DYNAMIKA JS:
// Obiekt można "złożyć" z istniejących stałych i zmiennych:
const middleName = 'Jankowska';
let yearsOld = 30;
const myUser = {
	name: 'Janina',
	lastName: middleName,
	age: yearsOld + 5
}
console.log(myUser);


// Obiekty mogą posiadać metody
// Przykład:

const weather = {
	sayCurrentWeatherCast: function() {
		console.log('Dzisiaj będzie słonecznie')
	}
}

weather.sayCurrentWeatherCast();

// nowe metody również mogą być dodawane dynamicznie

weather.isSunny = function() {
	return true
}

console.log(weather.isSunny())
console.log(weather)

// Własność obiektów - unikatowe pola!

// Każde pole w obiekcie jest unikatowe.
// Technicznie - zapisanie czegoś takiego nie jest błędem, ale i tak "ostatni wygrywa"
const myTestObject = {
	name: 'Jacek',
	name: 'Roman'
}

console.log(myTestObject);
console.log(myTestObject.name);


// Własność obiektów - dynamiczny dostęp!

// Do properties można dostać się "dynamicznie"


const myArmyKnife = {tool: 'screwdriver'};
console.log(myArmyKnife.tool);
// lub dynamicznie:
console.log(myArmyKnife['tool']);

// Jak to wykorzystać? - bardziej "z życia wzięty" przykład:
const property = 'tool';

console.log(myArmyKnife[property]);

