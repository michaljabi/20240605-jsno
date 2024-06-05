/**
 * Ponieważ program w Node.js uruchamiany jest fizycznie na komputerze,
 * to jest to process z pkt. widzenia Systemu Operacyjnego
 *
 * okazuje się, że w dowolnym momencie programu mamy również dostęp,
 * do globalnego obiektu:
 * process
 *
 * Stwarza to ogromne możliwości z pkt. widzenia pisania programów.
 *
 * Możemy nie tylko sprawdzić jaka jest wersja Node, ale również
 * podejrzeć zmienne zależne od danego środowiska.
 * Np. HOMEPATH
 * albo TEMP
 *
 * */

console.log(process);
console.log(process.env);
console.log('System operacyjny:', process.env.OS);
console.log('Katalog tymczasowy (ścieżka):', process.env.TEMP);
console.log('Dysk systemowy:', process.env.HOMEDRIVE);
console.log('Nazwa hosta (komputera):', process.env.COMPUTERNAME);

// Strumień wyjścia (na konsolę)
process.stdout.write('\n---> Możemy bezpośrednio dostać się do strumienia wyjścia...\n\n')

// Możemy również nasłuchiwać eventów.
// np. końca programu:
process.on('exit', (code) => {
	console.log(`Przed wyjściem z programu dostaje kod "${code}"`);
})

