import getGeneralLogic from '../index.js';
import { calculate, getNumInTheRange, getRandomOperator } from '../utilites.js';

export const termsOfCalcGame = 'What is the result of the expression?';

export const getCalcLogic = () => {
  const randomOperand1 = getNumInTheRange(100);
  const randomOperand2 = getNumInTheRange(100);
  const randomOperator = getRandomOperator();

  const question = `Question: ${randomOperand1} ${randomOperator} ${randomOperand2}`;
  const answer = calculate(randomOperand1, randomOperator, randomOperand2);

  return [question, String(answer)];
};

export default () => getGeneralLogic(termsOfCalcGame, getCalcLogic);
