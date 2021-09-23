#!/usr/bin/env node
/* eslint-disable import/extensions */
import getGeneralLogic from '../src/index.js';
import { termsOfCalcGame, getCalcLogic } from '../src/games/calculate.js';

console.log(getGeneralLogic(termsOfCalcGame, getCalcLogic));
