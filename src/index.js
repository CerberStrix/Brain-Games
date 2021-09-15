/* eslint-disable import/extensions */
import isEvenLogic from '../games/isEven.js';
import calcLogic from '../games/calculate.js';
import { greeting, questionForName } from './cli.js';

const termsForIsEvenGames = 'Answer "yes" if the number is even, otherwise answer "no".';
const termsForCalcGames = 'What is the result of the expression?';
const greetingsByName = (name) => `Hello, ${name}!`;

export const isEvenGame = () => {
  console.log(greeting);
  const name = questionForName();
  console.log(greetingsByName(name));
  console.log(termsForIsEvenGames);
  return isEvenLogic(name);
};

export const isCalcGame = () => {
  console.log(greeting);
  const name = questionForName();
  console.log(greetingsByName(name));
  console.log(termsForCalcGames);
  return calcLogic(name);
};
