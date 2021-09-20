#!/usr/bin/env node
/* eslint-disable import/extensions */
import { termsOfGcdGame } from '../src/gamesComponents.js';
import generalLogic from '../src/index.js';
import gcdLogic from '../games/gcd.js';

console.log(generalLogic(termsOfGcdGame, gcdLogic));
