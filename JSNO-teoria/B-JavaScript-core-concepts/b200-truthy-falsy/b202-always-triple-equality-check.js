/**

 # Przykład:
 Pozamieniaj na właściwe porównania razem ze sprawdzeniem typów

 Z użyciem podwójnego "==" porównania w JavaScript, wiąże się problem,
 "Niejawnego rzutowania typów".

 Zamiast podwójnie powinniśmy wszędzie stosować potrójny operator porównania.
 Zobacz: https://dorey.github.io/JavaScript-Equality-Table/

 */

const one = '1';
const otherOne = 1;
const on = true;
const off = false;


if ( one == on ) {
  console.log( 'Hello one is on !' );
}

if ( [] == off ) {
  console.log( 'hello' );
}

if ( otherOne == one ) {
  console.log( 'Hello World' );
}

