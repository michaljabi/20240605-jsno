/**
 * Co jeśli potrzebujemy programu konsolowego z możliwością zamknięcia go,
 * w zależności od tego co wpisuje User?
 *
 */

const readline = require('readline');
// Strumień odczytu danych jest poza "programLoop" bo nie chcemy go za każdym razem Tworzyć od nowa!
const read = readline.createInterface(process.stdin, process.stdout);

console.log(`	

  __  __                                                   
 |  \\/  |                                                  
 | \\  / |_   _   _ __  _ __ ___   __ _ _ __ __ _ _ __ ___  
 | |\\/| | | | | | '_ \\| '__/ _ \\ / _\` | '__/ _\` | '_ \` _ \\ 
 | |  | | |_| | | |_) | | | (_) | (_| | | | (_| | | | | | |
 |_|  |_|\\__, | | .__/|_|  \\___/ \\__, |_|  \\__,_|_| |_| |_|
          __/ | | |               __/ |                    
         |___/  |_|              |___/                     

Witaj, co chcesz zrobić ?!
Możliwe polecenia:
!time - pokazuje czas
!exit - wyjście z programu
`)

function programLoop() {
	console.log('-----');
	read.question('Polecenie: ', userInput => {
		switch(userInput) {
			case '!time':
				console.log('Aktualny czas to:', new Date().toTimeString());
				break;
			case '!exit':
				console.log('OK, zamykam program - miłego dnia.... !')
				read.close();
				return process.exit();
			default:
				console.log(`Nie znam polecenia: ${userInput}!`)
		}
		// zapętlenie programu (rekurencja):
		programLoop();
	})
}

// Pierwsze wywołanie:
programLoop();
