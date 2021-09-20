#!/usr/bin/env node
/* eslint-disable import/extensions */
import { termsOfCalcGame } from '../src/gamesComponents.js';
import generalLogic from '../src/index.js';
import calcLogic from '../games/calculate.js';

console.log(generalLogic(termsOfCalcGame, calcLogic));
