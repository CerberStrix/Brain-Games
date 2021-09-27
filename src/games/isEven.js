import getGeneralLogic from '../index.js';
import { getNumInTheRange, checkEven } from '../utilites.js';

export const termsOfIsEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getEvenLogic = () => {
  const randomNumber = getNumInTheRange(100);
  const answer = checkEven(randomNumber);
  const question = `Question: ${randomNumber}`;

  return [question, answer];
};

export default () => getGeneralLogic(termsOfIsEvenGame, getEvenLogic);
