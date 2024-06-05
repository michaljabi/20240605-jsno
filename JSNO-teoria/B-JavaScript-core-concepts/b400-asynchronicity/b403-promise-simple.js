/**
 * Promises sprawdzają się tam gdzie callback nie jest wystarczającym rozwiązaniem.
 *
 *
 * Promise uwzględnia 2 możliwości rozwiązania:
 * - coś się uda, zwróci wynik
 * lub
 * - coś pójdzie nie tak - dostaniemy error
 *
 * Poza uproszczeniem zapisu obsługi takiego stanu rzeczy,
 * dostajemy jeszcze tzw. chaining - możliwość niemalże "liniowego" zapisu wywołania kolejnych
 * operacji asynchronicznych
 *
 * Na początek podzielmy swój tok poznawania Promise, na 2 części.
 * Możemy rozróżnić:
 *
 * - 1. PROVIDERa - kawałek kodu / funkcję - tworzący Promise i ustalający sposób wysyłania danych lub błędu.
 *
 * - 2. CONSUMERa(/ów) - (! dowolną) liczbę odbiorców naszej Promise
 *
 * */


// PROVIDER
function giveMePromise(password) {
	const someData = { userName: 'admin' };
	// Tutaj robimy nową instancję promise
	// To po prostu konstruktor, przyjmujący wyrażenie funkcji jako argument w konstruktorze
	return new Promise((resolve, reject) => {
		// parametry tej funkcji to 2 inne funkcje: resolve oraz reject
		// dzięki temu że są to funkcje - możemy bez obaw wykonać tutaj DOWOLNĄ operacje,
		// Na jej podstawie określimy czy wszystko jest w porządku i wywołamy resolve()
		// Czy jednak coś jest nie tak i damy reject();
		if(password === 's3cr3t k3y') {
			resolve(someData); // wykorzystując idee closure - mamy dostęp do someData !
		} else {
			reject(new Error('Nieprawidłowe hasło'))
		}
	})
}

// CONSUMER(s):

// Aby odebrać promise musimy zrobić tak:
giveMePromise('s3cr3t k3y')
	.then(data => {
		console.log('Otrzymałem dane', data)
	})
// Jednak tutaj zakładamy tylko "Wesołą ścieżkę"
// Co jeśli byłby błąd ?
// Powinniśmy przygotować się na obydwa przypadki:

giveMePromise('wrong')
	.then(data => {
		console.log('Otrzymałem dane', data)
	})
	.catch(err => {
		console.log('[!!!] Jest błąd:', err.message)
	})

