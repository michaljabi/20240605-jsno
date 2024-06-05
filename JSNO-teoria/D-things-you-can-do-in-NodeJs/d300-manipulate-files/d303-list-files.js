/**
 * fs potrafi również sprawdzać katalogi i pokazywać jakie pliki / podkatalogi się w nich znajdują
 * */

const fs = require('fs');

// Chcemy pokazać listę znajdujących się w tym katalogu plików i folderów
fs.readdir(__dirname, (err, fileList) => {
	if(err) {
		return console.error(err);
	}
	// tutaj dostajemy informacje tylko w postaci listy stringów
	for(const file of fileList) {
		console.log('Znalazłem', file)
	}
})

// Możemy dowiedzieć się więcej (nie tylko nazwy plików)
// Prosząc o inny typ zwracany w liście callback'u: tzw. Dirent
// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_class_fs_dirent
// dodajemy flagę: {withFileTypes: true}

fs.readdir(__dirname, {withFileTypes: true}, (err, fileList) => {
	if(err) {
		return console.error(err);
	}
	// tutaj dostajemy informacje jako instancje Dirent
	for(const file of fileList) {
		console.log('Znalazłem', file.isFile() ? 'plik' : 'katalog', '-', file.name)
	}
})
