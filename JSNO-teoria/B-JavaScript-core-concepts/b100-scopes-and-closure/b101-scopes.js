/**
 *
 * W JavaScript bardzo ważną rolę odgrywają tzw. zasięgi - SCOPE
 *
 * Chodzi o to że funkcja ma dostęp do tego co jest "na zewnątrz niej"
 * będziemy to nazywać "outer scope"
 *
 * Pozwala nam to na wykorzystanie wartości, które zdefiniowane są poza funkcją.
 *
 * Zasięg na "samym szczycie" nazywany jest tzw. Global Scope
 * Jednak wiemy, że w Node.js każdy plik ma własny zakres - więc nazywanie go "globalnym"
 * jest technicznie delikatnym nadużyciem. Można jednak mówić o zakresie modułu.
 *
 * Faktyczny zasięg globalny w całym Node.js osiągamy odwołując się do obiektu:
 * global
 *
 *
 * */


// a) Module SCOPE
const model = 'Q2'

function mySuperCar () {
	// b) local SCOPE of (mySuperCar)

	function getName() {
		return 'Audi'
	}

	console.log('Moje super auto to:')
	console.log(getName())
	console.log(model)
}

mySuperCar();
