#!/usr/bin/env node
/* eslint-disable import/extensions */
import getGeneralLogic from '../src/index.js';
import { termsOfGcdGame, getGcdLogic } from '../src/games/gcd.js';

console.log(getGeneralLogic(termsOfGcdGame, getGcdLogic));
