/**
 * 2.1
 *
 * Zrób funkcję "divide", która dzieli 2 liczby,
 * ale przesyła do nas wynik, po 3 sekundach.
 * funkcja ta nie powinna w sobie zawierać słowa kluczowego "return".
 * Ma odliczyć 3 sekundy i "wysłać" wynik.
 *
 * Pokaż użycie funkcji divide — udowodnij, że działa poprawnie
 * */

function divide(a, b, callback) {
    if (b === 0) {
        throw new Error('Cannot divide by 0')
    }
    setTimeout(() => {
        callback(a / b)
    }, 3000)
}


divide(20, 3, (result) => {
    console.log(result)
})

/**
 * 2.2
 *
 * Jak teraz możemy obsłużyć błąd "Cannot divide by 0"?
 * - zaproponuj rozwiązanie
 * */

try {
    divide(10, 0, () => { })
} catch (e) {
    console.log(e.message)
}

console.log('jest');

// "Jedyny" możliwy sposób obsługi błędu asynchrnicznego:


function divideAsync(a, b, callback) {
    setTimeout(() => {
        // tutaj throw nic nam nie powie.... (nie zadziała od strony CONSUMERa)
        const err = (b === 0) ? 'Cannot divide by 0' : null;
        callback(err, a / b)
    }, 3000)
}


divideAsync(10, 1, (err, value) => {
    if (err) {
        return console.log(err);
    }
    console.log(value);
    // Jak wygląda callback hell:
    
    // divideAsync(10, 1, (err, value) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(value);
    //     divideAsync(10, 1, (err, value) => {
    //         if (err) {
    //             return console.log(err);
    //         }
    //         console.log(value);
    //     })
    // })
})


divideAsync(10, 0, (err, value) => {
    if (err) {
        return console.log(err);
    }
    console.log(value);
})