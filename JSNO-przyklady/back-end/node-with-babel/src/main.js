import { Car } from './Car'

console.log('Hello in my program')

const myCar = new Car();
const myOtherCar = new Car('Audi', 'A8');

myCar.sayNameAndModel();
myOtherCar.sayNameAndModel();
