export class Car {

	constructor (name = 'Audi', model = 'A8') {
		this.name = name;
		this.model = model;
	}

	makeSomeNoise () {
		console.log( `Wroom, wroom... ${this.name} ${this.model}` );
	}
}
