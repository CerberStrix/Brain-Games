#!/usr/bin/env node
import getGeneralLogic from '../src/index.js';
import { termsOfCalcGame, getCalcLogic } from '../src/calculate.js';

console.log(getGeneralLogic(termsOfCalcGame, getCalcLogic));
