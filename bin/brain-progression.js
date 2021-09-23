#!/usr/bin/env node
import getGeneralLogic from '../src/index.js';
import { termsOfProgressionGame, getProgressionLogic } from '../src/progression.js';

console.log(getGeneralLogic(termsOfProgressionGame, getProgressionLogic));
