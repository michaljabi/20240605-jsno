/**
 * Node.js ma swoją natywną bibliotekę: fs
 * (file system)
 *
 * https://nodejs.org/dist/latest-v14.x/docs/api/fs.html
 *
 * służy ona do obsługi plików.
 * Zasadniczo jej metody posiadają 2 tryby.
 *
 * przykładowo:
 *    readFile()
 * ma swój odpowiednik:
 *    readFileSync()
 *
 * Obydwie służą do odczytywania plików - jednak sposób wykonania tego zadania się różni.
 * wszystkie funkcje:
 *    ...Sync()
 * będą blokowały program do czasu odczytania pliku i zwrócenia wartości.
 * - nie jest to pożądane np. w momencie gdy piszemy program - serwer
 *
 * Dodatkowym elementem jest np. fakt, że niektóre metody fs mogą zwracać wyniki, zależnie od platformy
 * tzw. "platform-specific". Coś inaczej działa na Linux / Windows / FreeBSD ... etc.
 * Przykład:
 *
 * https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfile_path_options_callback
 * */


// Zanim odczytamy plik sprawdźmy czy on istnieje - dzięki "access":
const fs = require('fs');

fs.access('./sample-file.txt', (err) => {
	if(err) {
		console.log(err);
		// W zależności od tego z jakiego miejsca uruchomiliśmy ten plik...
		// Okazać się może, że plik nie istnieje !?
		// Dlaczego ?!
		// Wydaje nam się że ścieżka jest zawsze relatywna do tego pliku, natomiast zobacz jaką faktycznie ścieżkę przeszukał node:
		console.log(err.path);
		// Jest to ścieżka miejsca uruchomienia tego skryptu + nazwa pliku.
	}
})

// Żeby upewnić się na 100 % że zawsze pokazujemy właściwy plik,
// Potrzebujemy jeszcze jednej natywnej biblioteki "path"
const path = require('path');
// Resolve pomoże nam ścieżkę absolutną do pliku
// __dirname - wskazuje na katalog w którym mieści się ten skrypt
const myFilePath = path.resolve(__dirname, './sample-file.txt');
// Dodatkowo fs.constants.R_OK sprawdzamy czy możemy odczytać plik.
// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_access_path_mode_callback
fs.access(myFilePath, fs.constants.R_OK, (err) => {
	if(err) {
		return console.error('Błąd dostępu do pliku: ', err)
	}
	// Jeśli jesteśmy w tym miejscu to znaczy że wszystko przebiegło pomyślnie, możemy odczytać plik:
	fs.readFile(myFilePath, 'utf8', (err, data) => {
		 if(err) {
		 	  return console.error('Błąd odczytu pliku: ', err)
		 }
		 console.log('Treść pliku:')
		 console.log(data);
	})
})
