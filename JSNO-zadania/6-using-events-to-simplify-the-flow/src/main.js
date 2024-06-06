import { createInterface } from 'node:readline';
import { stdin, stdout, exit } from 'node:process';
import { programEventBus } from './program-event-bus.js'
import './render-layer.js'

const readline = createInterface(stdin, stdout)

console.log('[Path Segments 1.0]');

programEventBus.on('onStart', () => {
    setTimeout(() => {
        programEventBus.emit('onLoad')
    }, 3000)
})

programEventBus.on('onLoad', () => {
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
    readline.close();
    exit();
})

programEventBus.emit('onStart');


