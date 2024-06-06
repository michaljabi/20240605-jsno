import { programEventBus } from "./program-event-bus.js";

programEventBus.on('onStart', () => {
    console.log('Proszę czekać, ładowanie danych...')
})

programEventBus.on('onLoad', () => {
    console.log(`----
        Witaj.
        Obsługa programu: 
          1. podaj ścieżkę
          lub
          2. wpisz: koniec - aby zakończyć działanie programu`)
})

programEventBus.on('onClose', () => {
    console.log(`
        ---
        Żegnaj.
        `)
})