/**
 * NodeJs posiada swoje pomocnicze wbudowane (natywne) biblioteki
 *
 * Jedną z nich - ułatwiającą nam odczytywanie danych wpisywanych przez użytkownika
 * jest: readline
 *
 * Jej najprostsze użycie wygląda następująco:
 */

const readline = require('readline'); // zauważ, że w require nie używamy ścieżki "./" co wskazuje NodeJS'owi, że chodzi o bibliotekę
const read = readline.createInterface(process.stdin, process.stdout)

const user = {
    name: '',
    nickname: ''
}
read.question('Podaj imię: ', name => {
    user.name = name;
    // Niestety, ale kolejne wywołanie question - musi być zagnieżdżone.
    // Dzieje się tak dlatego, że #1 callback przyniesie nam name dopiero tutaj,
    // w tym układzie dopiero teraz możemy zadać 2 pytanie...
    read.question('Podaj pseudonim: ', nickname => {
        user.nickname = nickname
        console.log(`Witaj ${name}, znany również jako ${nickname}`);
        // Zamykamy odczyt aby program nie "wisiał" w nieskończoność
        read.close();
    })
})

// Czy istnieje sposób na uproszczenie tego zagnieżdżenia?
// Tak - jest nim użycie promise + async / await.
