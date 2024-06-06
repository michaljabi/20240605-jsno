import { EventEmitter } from 'node:events'
import { createInterface } from 'node:readline';
import { stdin, stdout, exit } from 'node:process';

const programEventBus = new EventEmitter();
const readline = createInterface(stdin, stdout)

console.log('[Path Segments 1.0]');

programEventBus.on('onStart', () => {
    console.log('Proszę czekać, ładowanie danych...')
    setTimeout(() => {
        programEventBus.emit('onLoad')
    }, 3000)
})

programEventBus.on('onLoad', () => {
    console.log(`----
Witaj.
Obsługa programu: 
  1. podaj ścieżkę
  lub
  2. wpisz: koniec - aby zakończyć działanie programu`)
    programEventBus.emit('onPathSegmentsRequested')
})

programEventBus.on('onPathSegmentsRequested', () => {
    readline.question('Podaj ścieżkę: ', (value) => {
        if (value === 'koniec') {
            programEventBus.emit('onClose');
        } else {
            const segments = value.split(/[\/\\]/);
            console.log(`
- Liczba segmentów ${segments.length}
- Segmenty: ${segments}`)
            programEventBus.emit('onPathSegmentsRequested')
        }
    })
})

programEventBus.on('onClose', () => {
    console.log(`
---
Żegnaj.
`)
    readline.close();
    exit();
})

programEventBus.emit('onStart');


