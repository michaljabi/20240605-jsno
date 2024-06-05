/**
 *
 * Closures - Domknięcia
 *
 * W JavaScript, najczęściej pojawiają się jako możliwość osiągnięcia zamkniętych,
 * prywatnych zmiennych czy stałych.
 *
 *
 * */

// Przykładowe użycie closure (extendableRam - zostaje w pamięci)
// memory oraz extendMemory będą miały do niego dostęp, nawet po zakończeniu wywołania laptopFactory()
// będąc częścią nowego obiektu
function laptopFactory(producer = '', model = '', ramAmount = 0) {
	let extendableRam = ramAmount;
	return {
		producer,
		model,
		memory() {
			return extendableRam + ' GB';
		},
		extendMemory(extendBy) {
			extendableRam += extendBy;
		}
	}
}

const myLaptop = laptopFactory('Dell', 'Precision 5530', 4)

console.log(myLaptop)
console.log(myLaptop.memory())

myLaptop.extendMemory(4)
myLaptop.extendMemory(4)

console.log(myLaptop.memory())
