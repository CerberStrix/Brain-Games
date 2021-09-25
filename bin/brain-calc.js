#!/usr/bin/env node
import getGeneralLogic from '../src/index.js';
import { termsOfCalcGame, getCalcLogic } from '../src/games/calculate.js';

getGeneralLogic(termsOfCalcGame, getCalcLogic);
