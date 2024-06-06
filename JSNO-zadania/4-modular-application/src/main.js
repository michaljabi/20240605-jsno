import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';

import program from "./program.js";


console.log('HELLO !')

program(createInterface(stdin, stdout));
