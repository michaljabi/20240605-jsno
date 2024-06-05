import chalk from 'chalk';
import helloWorld from './hello-text.js';

const textParts = helloWorld.split(' ')
const hello = textParts[0];
const world = textParts[1];

console.log(chalk.black.bgBlue(hello) + ' ' + chalk.red(world) + ' :)');
