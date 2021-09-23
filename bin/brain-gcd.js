#!/usr/bin/env node
import getGeneralLogic from '../src/index.js';
import { termsOfGcdGame, getGcdLogic } from '../src/gcd.js';

console.log(getGeneralLogic(termsOfGcdGame, getGcdLogic));
