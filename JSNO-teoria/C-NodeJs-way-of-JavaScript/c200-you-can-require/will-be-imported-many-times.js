
console.log('Hello, tutaj will-be-imported... - właśnie się załadowałem...');

const iWillBeSingleArrayInMemory = [];

function makeAShout(word = '') {
	return `I shout: ${word.toUpperCase()}!`;
}

module.exports = {
	// tutaj wykorzystujemy zapis z ES6
	// http://es6-features.org/#PropertyShorthand
	makeAShout
}
