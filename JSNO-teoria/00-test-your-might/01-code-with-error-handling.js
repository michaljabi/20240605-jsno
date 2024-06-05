/**
 * 1
 *
 * Zrób funkcję, która dzieli 2 liczby
 * i rzuca błąd "Cannot divide by 0" jeśli 2 liczba to "0"
 * */

function divide(a, b) {
    // function helloz () {
    //     function helloz () {
    //         function helloz () {}
    //     }
    // }
    if (b === 0) {
        throw new Error('Cannot divide by 0')
        // console.log('2')
    }
    return a / b
}

try {

    // Tak nie chcemy (to nie ma sensu)
    // throw new Error('Cannot divide by 0')

    function helloz () {}

    let hello = 'world';
    // console.log(divide(10, 2))
    // console.log(divide(100, 3))
    console.log(divide(3, 0))
    console.log(divide(3, 0))
    console.log(divide(3, 0))
    console.log(divide(3, 0))
} catch (e) {
    // console.log(hello);
    console.log(e.message);
} finally {
    // console.log(hello);
    console.log('Wykonam sie niezależnie od tego czy jest błąd czy nie...')
}




// POC / Scratchpad
console.log(20 / 0)


try {
    JSON.parse(';')
    console.log('Ja będę na szaro bo poprzednia linia zwaca błąd...')
} catch (e) {
    console.log(e.message)
}

console.log('!')