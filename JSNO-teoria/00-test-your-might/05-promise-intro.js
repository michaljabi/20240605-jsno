
console.log('Hello stranger... shall we start?')

// nasz PROVIDER:
function giveMeTheNumber() {
    return Promise.resolve(300)
}

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */

// CONSUMER
giveMeTheNumber()
    .then((value) => {
        console.log(value)
    })
    .then((value) => {
        throw new Error('OH NO!')
        // console.log(value)
    })
    .then((value) => {
        console.log(value)
    })
    .then((value) => {
        console.log(value)
    })
    .catch((err) => {
        console.log('error 😐', err.message)
    })
// .then((value) => {
//     console.log(value)
// })
// .then((value) => {
//     console.log(value)
//     return 800
// })
// .then((value) => {
//     console.log(value)
//     return Promise.resolve(300)
// })
// .then((value) => {
//     console.log(value)
// })

function divideAsync(a, b) {
    if (b === 0) {
        return Promise.reject(new Error('Cannot divide by 0'))
    }
    return Promise.resolve(a / b);
}


// CONSUMER:
divideAsync(10, 10)
    .then((value) => {
        console.log(value);
    })
    .catch((e) => {
        console.log(e.message);
    })


// PROVIDER:
// Timeout with promise:
function divideAsyncTimeout(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                return reject(new Error('Cannot divide by 0'))
            }
            resolve(a / b)
        }, 3000)
    })
}

// CONSUMER:
divideAsyncTimeout(10, 0)
    .then((value) => {
        console.log(value);
    })
    .catch((e) => {
        console.log(e.message);
    })