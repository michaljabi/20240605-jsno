/**
 * Standardowo Node.js obsługuje składnie CommonJS.
 *
 * Pozwala ona na importowanie: require('./filepath/filename');
 * oraz
 * eksportowanie: module.exports =
 *
 * w plikach .js
 *
 * Daje nam to podział na moduły — tak mówi się tutaj o plikach — moduły.
 * Samo require() nie umożliwi nam dostępu do zmiennych w danym pliku (module).
 *
 * Moduł sam musi podjąć decyzję czy i co będzie eksportował oraz w jaki sposób.
 *
 * Aby uruchomić ten plik, wystarczy w konsoli (będąc na ścieżce tego katalogu)
 * wpisać: node ./c001-first-program-example
 * */

const sayHelloWorld = require('./say-hello-world');

sayHelloWorld.sayHello();

console.log('Your lucky number is', sayHelloWorld.LUCKY_NUMBER)
