/**
 * Dobrą praktyką w pisaniu nowych projektów / programów w Node.js
 * jest utworzenie katalogu /src
 *
 * to w środku niego będą znajdowały się wszystkie pliki z kodem.
 * Natomiast pozostałe pliki konfiguracyjne - będą znajdowały sie w katalogu głównym projektu.
 * */

const Car = require('./Car')

const car1 = new Car()
const car2 = new Car('Bugatti', 'Veyron')

car1.makeSomeNoise()
car2.makeSomeNoise()
