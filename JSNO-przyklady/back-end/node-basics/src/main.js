const chalk = require('chalk');
const helloWorld = require('./hello-text');

const textParts = helloWorld.split(' ')
const hello = textParts[0];
const world = textParts[1];

console.log(chalk.black.bgBlue(hello) + ' ' + chalk.red(world) + ' :)');
