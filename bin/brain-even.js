#!/usr/bin/env node
/* eslint-disable import/extensions */
import getGeneralLogic from '../src/index.js';
import { termsOfIsEvenGame, getEvenLogic } from '../src/games/isEven.js';

console.log(getGeneralLogic(termsOfIsEvenGame, getEvenLogic));
