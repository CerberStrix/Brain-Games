/* eslint-disable import/extensions */
import isEvenLogic from '../games/isEven.js';
import calcLogic from '../games/calculate.js';
import gcd from '../games/gcd.js';
import progression from '../games/progression.js';

import { greeting, questionForName } from './cli.js';

const termsForIsEvenGames = 'Answer "yes" if the number is even, otherwise answer "no".';
const termsForCalcGames = 'What is the result of the expression?';
const termsForGcdGame = 'Find the greatest common divisor of given numbers.';
const termsForProgressionGame = 'What number is missing in the progression?';

const greetingsByName = (name) => `Hello, ${name}!`;

export const finalResult = (name, game) => {
  if (game === true) {
    return `Congratulations, ${name}!`;
  }
  return `'${game[1]}' is wrong answer ;(. Correct answer was '${game[0]}'\nLet's try again, ${name}!`;
};

export const isEvenGame = () => {
  console.log(greeting);
  const name = questionForName();
  console.log(greetingsByName(name));
  console.log(termsForIsEvenGames);
  return finalResult(name, isEvenLogic());
};

export const isCalcGame = () => {
  console.log(greeting);
  const name = questionForName();
  console.log(greetingsByName(name));
  console.log(termsForCalcGames);
  return finalResult(name, calcLogic());
};

export const gcdGame = () => {
  console.log(greeting);
  const name = questionForName();
  console.log(greetingsByName(name));
  console.log(termsForGcdGame);
  return finalResult(name, gcd());
};

export const progressionGame = () => {
  console.log(greeting);
  const name = questionForName();
  console.log(greetingsByName(name));
  console.log(termsForProgressionGame);
  return finalResult(name, progression());
};
