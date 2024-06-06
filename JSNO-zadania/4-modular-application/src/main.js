
import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';

import { makeBanner } from './banner-generator.js';


const read = createInterface(stdin, stdout);

function program() {
    read.question('Podaj zdanie jakie chcesz zamienić w banner:\n', value => {
        makeBanner(value)
        console.log()
        read.question(`
Co robimy dalej - wpisz odpowiednią literę:
[k]oniec
[n]astępny banner   
`, value => {
            if (value.toLowerCase() === 'k') {
                console.log('Kończę działanie, żegnam...');
                read.close();
            } else if (value.toLowerCase() === 'n') {
                // jakoś zapętlić...
                program();
            } else {
                console.log(`Nieobsługiwany wybór "${value}"!`)
                // jakoś zapętlić...
                program();
            }
        })
    })
}

program();
