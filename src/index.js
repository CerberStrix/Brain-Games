/* eslint-disable import/extensions */
import isEvenLogic from '../games/isEven.js';
import calcLogic from '../games/calculate.js';
import gcd from '../games/gcd.js';
import progression from '../games/progression.js';
import primeLogic from '../games/prime.js';

import { greeting, questionForName } from './cli.js';
import {
  greetingsByName, termsIsEvenG, termsCalcG, termsGcdG, termsProgressionG, termsPrime, finalResult,
} from './gamesComponents.js';

export const isEvenGame = () => {
  console.log(greeting);
  const name = questionForName();
  console.log(greetingsByName(name));
  console.log(termsIsEvenG);
  return finalResult(name, isEvenLogic());
};

export const isCalcGame = () => {
  console.log(greeting);
  const name = questionForName();
  console.log(greetingsByName(name));
  console.log(termsCalcG);
  return finalResult(name, calcLogic());
};

export const gcdGame = () => {
  console.log(greeting);
  const name = questionForName();
  console.log(greetingsByName(name));
  console.log(termsGcdG);
  return finalResult(name, gcd());
};

export const progressionGame = () => {
  console.log(greeting);
  const name = questionForName();
  console.log(greetingsByName(name));
  console.log(termsProgressionG);
  return finalResult(name, progression());
};

export const primeGame = () => {
  console.log(greeting);
  const name = questionForName();
  console.log(greetingsByName(name));
  console.log(termsPrime);
  return finalResult(name, primeLogic());
};
