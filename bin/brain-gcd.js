#!/usr/bin/env node
import getGeneralLogic from '../src/index.js';
import { termsOfGcdGame, getGcdLogic } from '../src/games/gcd.js';

getGeneralLogic(termsOfGcdGame, getGcdLogic);
