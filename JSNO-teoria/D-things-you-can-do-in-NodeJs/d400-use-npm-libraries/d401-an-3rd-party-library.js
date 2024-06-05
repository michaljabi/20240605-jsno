/**
  Node Package Manager
  To manager pakietów do Node (jak sama nazwa wskazuje)

  Dzięki niemu możemy do programu dołączyć dodatkowe biblioteki, napisane przez innych programistów.
  Są to biblioteki open-source, dostępne w repozytorium npmjs.com

  https://www.npmjs.com/

  Przypomnijmy sobie zapisy:
  const path = require('path');
  const fs = require('fs');
  const readline = require('readline');

  Wszystkie te biblioteki pomocnicze do Node.js mają jedną cechę wspólną:
  - SĄ WBUDOWANE, i istnieją już (są natywne) w Node.js

  Jednak Node.js jest znacznie potężniejsze, wspiera programy OPEN-SOURCE (z ogólnodostępnym kodem)
  i pozwala innym programistom na tworzenie własnych bibliotek, które mogą być dołączane do projektu!

  Przykładem będzie tutaj biblioteka "chalk" - która służy do kolorowania tekstu w terminalu.
*/

const chalk = require('chalk');

console.log(chalk.blue('My Little'), chalk.black.bgRed(' World! '));

/*
* Uruchomienie teraz programu w standardowy sposób - nie zadziała.
* A właściwie - jeszcze nie zadziała.
*
* chalk - nie jest obsługiwane tak jak natywne bibliteki, trzeba zainstalować bibliotekę,
* żeby móc ją używać w projekcie.
*
* w NPM biblioteki są doinstalowywane lokalnie do projektu - co oznacza, że musimy do tego projektu,
* jednorazowo doinstalować bibliotekę chalk
*
* służy do tego komenda:
*
* npm install chalk
*
* czyli: npm install + nazwa biblioteki
*
* Zwróć uwagę, iż zostanie ona dopisana do package.json i pojawią się 2 nowe rzeczy:
* node_modules (to tam będą przechowywane zainstalowane w projekcie biblioteki)
* oraz
* package-lock.json (w dużym uproszczeniu: to plik upewniający nas o poprawnej wersji bibliotek tworząc drzewo zależności)
*
*
* Doinstaluj moduł chalk i uruchom powyższy kod.
* */
