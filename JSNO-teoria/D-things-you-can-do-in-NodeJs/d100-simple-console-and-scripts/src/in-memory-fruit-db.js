const fruitsCollection = [];

module.exports = {
	addFruit(fruit = '') {
		fruitsCollection.push(fruit);
	},
	hydrateState(initialFruits = []) {
		for(const fruit of initialFruits) {
			fruitsCollection.push(fruit);
		}
	},
	removeFruitByName(name) {
		const index = fruitsCollection.findIndex(f => f === name);
		if(index > -1) {
			fruitsCollection.splice(index, 1);
		}
	},
	getAllFruits() {
		return fruitsCollection;
	}
}
