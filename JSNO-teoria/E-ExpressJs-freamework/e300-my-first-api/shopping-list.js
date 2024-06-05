const list = [];

function initList(items = []) {
	// inicjujemy listę o to co jest przekazane:
	for(let item of items) {
		list.push(item);
	}
}

function addToList(item) {
	// dodajemy nowy element do listy
	list.push(item);
}

function findItems(nameFilter = '') {
	// szukamy na liście elementu
	const found = [];
	for(let item of list) {
		// Jeśli w nazwie naszego elementu występuje to po czym szukamy to dodajemy to do listy "found"
		// Zauważ że znak '' (pusty string) występuje we wszystkich nazwach
		// innymi słowy jako ktoś wywoła .findItems() - to dostanie WSZYSTKO na liście - i o takie zachowanie nam chodzi.
		if(item.includes(nameFilter)) {
			found.push(item);
		}
	}
	return found;
}

module.exports = {
	initList,
	addToList,
	findItems
}
