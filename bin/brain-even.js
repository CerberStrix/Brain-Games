#!/usr/bin/env node
import getGeneralLogic from '../src/index.js';
import { termsOfIsEvenGame, getEvenLogic } from '../src/games/isEven.js';

getGeneralLogic(termsOfIsEvenGame, getEvenLogic);
