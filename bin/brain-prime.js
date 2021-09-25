#!/usr/bin/env node
import getGeneralLogic from '../src/index.js';
import { termsOfPrimeGame, getPrimeLogic } from '../src/games/prime.js';

getGeneralLogic(termsOfPrimeGame, getPrimeLogic);
