/**
 * Wprowadzenie:
 *
 * Callbackiem nazywamy taką funkcję, która zostanie przekazana i wywołana przez inną.
 *
 * Jeśli to nie my definiowaliśmy logikę, która wywoła callback
 * - nie mamy pewności kiedy to nastąpi (chyba że znamy dokumentację).
 *
 * Najprostszy przykład użycia callbacku to kliknięcie w button.
 *
 * Nie wiesz kiedy to user zrobi, natomiast korzystasz z tzw. listener'a,
 * któremu przekazujesz callback "click" - w tedy po kliknięciu wykona się Twoja logika.
 *
 * */

function onClick() {
	console.log('Button clicked')
}

function listenToTheClick(fireLogic) {
	fireLogic();
}

listenToTheClick(onClick);


//  Zobaczmy to na innym przykładzie:
function dialNumber(phoneNumber, conversation) {
	console.log('Calling number', phoneNumber)
	conversation()
	console.log('connection interrupted...')
}

function onCallConversation() {
	console.log('Hello, can I order a pizza?')
	console.log('Yes...')
	console.log('Just not hawaiian please!')
}

// Przykład użycia:
// Zauważ, że nie my wywołujemy funkcję, - jedynie przekazujemy deklaracje funkcji !!!
dialNumber(123456789, onCallConversation)


// # Zadanie:
// Wykorzystując funkcję "dialNumber"
// Pokaż na ekranie:

// Calling number 123456789
// Hallo ?
// Hallo !!?
// connection interrupted...
