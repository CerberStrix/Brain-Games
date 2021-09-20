#!/usr/bin/env node
/* eslint-disable import/extensions */
import { termsOfPrimeGame } from '../src/gamesComponents.js';
import generalLogic from '../src/index.js';
import primeLogic from '../games/prime.js';

console.log(generalLogic(termsOfPrimeGame, primeLogic));
