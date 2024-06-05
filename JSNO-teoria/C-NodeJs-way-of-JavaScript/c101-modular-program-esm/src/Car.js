
// Możemy korzystać z dobroci ES11 w Node > 14.
// W tym układzie, słowo kluczowe class i domyślne parametry funkcji oraz template string — zadziałają,
// ponieważ zostały wprowadzone już w ES6 (2015)
export class Car {

	constructor (name = 'Audi', model = 'A8') {
		this.name = name;
		this.model = model;
	}

	makeSomeNoise () {
		console.log( `Wroom, wroom... ${this.name} ${this.model}` );
	}
}
