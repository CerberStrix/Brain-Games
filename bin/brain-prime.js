#!/usr/bin/env node
import getGeneralLogic from '../src/index.js';
import { termsOfPrimeGame, getPrimeLogic } from '../src/prime.js';

console.log(getGeneralLogic(termsOfPrimeGame, getPrimeLogic));
