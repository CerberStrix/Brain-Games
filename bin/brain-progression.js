#!/usr/bin/env node
/* eslint-disable import/extensions */
import { termsOfProgressionGame } from '../src/gamesComponents.js';
import generalLogic from '../src/index.js';
import progressionLogic from '../games/progression.js';

console.log(generalLogic(termsOfProgressionGame, progressionLogic));
