
import { exit } from 'node:process';

import { makeBanner } from './banner-generator.js';

export default function program(readline) {
    readline.question('Podaj zdanie jakie chcesz zamienić w banner:\n', value => {
        makeBanner(value)
        userChoice(readline)
    })
}

function userChoice(readline) {
    readline.question(`
Co robimy dalej - wpisz odpowiednią literę:
[k]oniec
[n]astępny banner   
`, value => {
        if (value.toLowerCase() === 'k') {
            console.log('Kończę działanie, żegnam...');
            readline.close();
            return exit();
        }
        if (value.toLowerCase() !== 'n') {
            console.log(`Nieobsługiwany wybór "${value}"!`);
            return userChoice(readline);
        }
        program(readline);
    })
}