#!/usr/bin/env node
import getGeneralLogic from '../src/index.js';
import { termsOfProgressionGame, getProgressionLogic } from '../src/games/progression.js';

getGeneralLogic(termsOfProgressionGame, getProgressionLogic);
