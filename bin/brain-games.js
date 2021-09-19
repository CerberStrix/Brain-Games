#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { greeting, questionForName } from '../src/cli.js';
import { greetingsByName } from '../src/gamesComponents.js';

console.log(greeting);
const name = questionForName();
console.log(greetingsByName(name));
