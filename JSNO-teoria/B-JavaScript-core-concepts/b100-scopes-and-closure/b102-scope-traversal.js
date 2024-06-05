/**
 * Tutaj testujemy zachowanie kolejnych poziomów w przypadku zakresów (SCOPES);
 *
 *
 * #1 Przykład do sprawdzenia:
 * Idąc od wewnątrz (fourthDream) do zewnątrz (inception)
 * Komentuj po kolei stałą nazwaną: "myColor"
 * (najpierw linia 26 potem 23 etc... aż do 17)
 *
 * Zobacz jak zachowuje się i co pokazuje console.log z linii 28
 *
 * */

const myColor = 'red';

function inception() {
	const myColor = 'cristal';

	function secondDream() {
		const myColor = 'sapphire';

		function thirdDream() {
			const myColor = 'emerald';

			function fourthDream() {
				const myColor = 'diamond';

				console.log(myColor);
			}
			fourthDream();
		}
		thirdDream();
	}
	secondDream();
}
inception();

// Przykład powyżej ukazuje jak JavaScript przeszukuje outer-scope jeśli nie znajdzie lokalnej zmiennej lub stałej,
// o którą prosimy.

// Zauważ że pokazana jest również inna sprawa
// To tzw. shadowing variable.
// Chodzi o to że jeśli zmienna w naszym scope nazywa się tak samo jak zmienna z outer-scope.
// Wtedy nie mamy możliwości się do niej odwołać

const myVariable = 123;

function sample() {
	const myVariable = 'Hello';
	console.log(myVariable);
	// Nie mam jak dostać się do outer scope
	// Musiałbym zmienić nazwę lokalnej zmiennej.

	// Jedno z rozwiązań jak odnaleźć takie miejsca w kodzie:
	// ESLint - Linter do JavaScript
	// https://eslint.org/
	// i jego reguła: no-shadow
	// https://eslint.org/docs/rules/no-shadow
}

sample();

// Info dodatkowe.

// DANGER ZONE:
// można zupełnie przypadkowo zadeklarować zmienną w global scope:
function findMyNewMug() {
	// "use strict"; // odkomentuj w odpowiednim momencie
	myMug = 'Moss sticker attached to bottom.'
	// Zmienna myMug nie była zadeklarowana w outer scope...
	// Co za tym idzie nie powinniśmy mieć możliwości jej nadpisania,
	// Jednak co się okazuje:
	console.log(myMug);
	// kod działa
}
findMyNewMug();

// Co robić ?
// używać "use strict"; - i pamiętać o słowach kluczowych const, let - ZAWSZE muszą być używane!
