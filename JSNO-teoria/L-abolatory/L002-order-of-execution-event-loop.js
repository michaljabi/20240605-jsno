// task
setTimeout(() => {
    console.log('1')
})

console.log('2')

// micro-task
Promise.resolve('3').then((value) => {
    console.log(value)
})

// Event loop:
// 1 proste zadanie ma.

// TODO list:
// 1. sprawdź czy stos wywołania jest pusty:
// 2. jeśli tak, sprawdź czy coś jest w kolejce
    // 2.1 najpierw sprawdzę kolejkę micro-task
    // 2.2 potem sprawdzę kolejkę task
// 3. jeśli jest w kolejce - wrzuć na stos wywołania.


// Jak to działa pod spodem:
// https://www.youtube.com/watch?v=8aGhZQkoFbQ