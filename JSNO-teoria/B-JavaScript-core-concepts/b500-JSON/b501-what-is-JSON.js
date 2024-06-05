/**
 *  JSON = JavaScript Object Notation
 *
 *  Sposób zapisu JavaScript, który pozwala na jego przechowywanie w postaci tekstowej.
 *  Jego szerokie zastosowanie widać w komunikacji klient - server za pomocą AJAX.
 *  Gdzie dane z serwera do klienta są przesyłane właśnie w tej formie.
 *
 *  Dodatkowo jest zastosowany jako warstwa zapisu w niektórych bazach NoSQL oraz potrafi być zapisany
 *  jako pole rekordu w bazie danych (np. format json/jsonb w PostgreSQL/MySQL)
 *
*/

// Przykład notacji JSON:
const myJSON = {
	"name": "Michał",
	"lastName": "Kowalski",
	"age": 22
}

// Zauważ że każdy z kluczy - musi tutaj być "opakowany" w znaki cudzysłowu - "...."
// Nie ma "alternatywy" - nie można zmienić tych znaków np. na - '...'
// co w przypadku czystego JS - jest możliwe dla stringów.

// Poza tym, string jest opakowywany w cudzysłowy, boolean i number - nie muszą.
// Cały ten zapis daje pewną elastyczność, przechowywania danych jako tekstowe, przykładowo:

const myJSONString = '{"name":"Michał","lastName":"Kowalski","age":22}';

// Powyższy zapis można później sparsować - jako klasyczny obiekt JavaScript z polami i wartościami.

console.log(myJSONString.lastName) // to nie zadziała - bo myJSONString to po prostu string.

// Jednak po parsowaniu do JS:
console.log(JSON.parse(myJSONString).lastName)
console.log(JSON.parse(myJSONString))

/**
*  Dane z obiektu łatwo można przekształcić w natywny JavaScript i odwrotnie, łatwo obiekt JS zmienić w JSON
*
*  ALE UWAGA:
	*  Nie odbywa się to "bezstratnie" ! Nie da się przekonwertować niektórych elementów - a niektóre ulegają zmianie.
*
*  Tutaj przetestujemy zachowanie serializacji i deserializacji do JSON (przekształcenia do JSON i z powrotem)
* */

const superObject = {
	name: 'Michał',
	age: 56,
	isAMember: true,
	birth: new Date(1963, 10, 1),
	shoutHello: function() {
			console.log('Hello !')
	}
}

// Serializacja do JSON:
const jsonData = JSON.stringify(superObject);

console.log(jsonData);

// Deserializacja do JavaScript:
const myReturnedObject = JSON.parse(jsonData);

console.log(myReturnedObject);




