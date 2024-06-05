import { greetings } from './insert-greetings.js'

const otherWorld = 'Inny świat2 ';

greetings();

const $body = document.querySelector('body');
$body.innerHTML += '<br>' + otherWorld