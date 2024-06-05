/**
 * 3
 *
 * Mając ograniczenie w postaci miejsca — w którym można pisać rozwiązanie.
 * Spraw, aby asercja w linii 20 nie zwracała błędu.
 * Wyrażenie fullName === expectedValue powinno być prawdą
 * */
let fullName = ''

function computeFullName() {
	const firstName = 'John';
	const lasName = 'Kowalsky';
	// Kod możesz pisać tylko w tym miejscu:
}

computeFullName();

// Sprawdzenie poprawności rozwiązania:
const expectedValue = 'John Kowalski';
console.assert(fullName === expectedValue, `Imię i nazwisko to "${fullName}" a powinno być "${expectedValue}"`);
