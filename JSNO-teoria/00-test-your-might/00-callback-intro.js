
console.log('Hello stranger... shall we start?')

// PROVIDER:
function giveMeTheNumber(mistery) {
    // mistery(300)
    mistery(10, 'a')
    // setTimeout(() => {
    //     mistery(6000)
    // }, 5000);
}

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */

// w terminalu:
// node ścieżka/do/pliku.js

// // function expression
// giveMeTheNumber(number => {
//     console.log(number)
// })

// CONSUMER 1:

// // function expression
// giveMeTheNumber(function (n) {
//     console.log(n)
//     n
// })


// CONSUMER 2:

// function definition
function recieveTheNumber(no, letter) {
    console.log(no)
    console.log(letter)
}

// giveMeTheNumber(recieveTheNumber)

giveMeTheNumber((a, b) => console.log(a,b));

// ...rest parameter (po 2015)
giveMeTheNumber((...arg) => console.log(arg));