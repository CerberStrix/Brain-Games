#!/usr/bin/env node
/* eslint-disable import/extensions */
import getGeneralLogic from '../src/index.js';
import { termsOfPrimeGame, getPrimeLogic } from '../src/games/prime.js';

console.log(getGeneralLogic(termsOfPrimeGame, getPrimeLogic));
