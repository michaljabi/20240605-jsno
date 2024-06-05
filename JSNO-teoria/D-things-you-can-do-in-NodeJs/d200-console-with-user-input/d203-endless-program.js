/**
 * Co jeśli chcemy żeby nasz program działał w nieskończoność?
 * Jednakże nie w oczekiwaniu na dane wpisywane przez użytkownika...
 *
 * Poza zrobieniem "nieskończonej pętli", do osiągnięcia tego celu może posłużyć również
 * Rekurencja
 *
 * - Czyli wywoływanie funkcji przez samą siebie.
 *
 * Dla porządku tego przykładu - zamkniemy program po ok. 8 sekundach.
 */

// Rozpatrzmy sobie program który co 2 sekundy nam coś wyświetla np. Hello N
// Gdzie N to numer wyświetlenia.
// Teraz - pętla nieskończona to zły wybór, bo coś się ma dziać co 2 sekundy, a nie natychmiast - jak kolejny krok pętli

function helloMe(times) {
	console.log('Witaj po raz', times, '!');
	const timer = setTimeout(() => {
		// Funkcja wywołuje sama siebie
		// Najpierw zwiększ o jeden a potem przekaż argument...
		helloMe(++times);
		// Dzieje się tak po 2 sec = 2000ms.
		if(times === 5) {
			console.log('kończymy program');
			clearTimeout(timer)
			process.exit();
		}
	}, 2000)
}

console.log('Welcome in my program ! :)');
helloMe(1);


