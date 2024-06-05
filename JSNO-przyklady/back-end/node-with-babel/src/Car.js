
export class Car {

	constructor (name = 'Toyota', model = 'Auris') {
		this.name = name
		this.model = model
	}

	sayNameAndModel() {
		console.log(this.name, this.model)
	}
}
