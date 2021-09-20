#!/usr/bin/env node
/* eslint-disable import/extensions */
import { termsOfIsEvenGame } from '../src/gamesComponents.js';
import generalLogic from '../src/index.js';
import isEvenLogic from '../games/isEven.js';

console.log(generalLogic(termsOfIsEvenGame, isEvenLogic));
