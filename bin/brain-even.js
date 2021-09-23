#!/usr/bin/env node
import getGeneralLogic from '../src/index.js';
import { termsOfIsEvenGame, getEvenLogic } from '../src/isEven.js';

console.log(getGeneralLogic(termsOfIsEvenGame, getEvenLogic));
