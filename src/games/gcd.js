import getGeneralLogic from '../index.js';
import { getGcd, getNumInTheRange } from '../utilites.js';

export const termsOfGcdGame = 'Find the greatest common divisor of given numbers.';

export const getGcdLogic = () => {
  const randomNumb1 = getNumInTheRange(100);
  const randomNumb2 = getNumInTheRange(100);

  const answer = getGcd(randomNumb1, randomNumb2);
  const question = `Question: ${randomNumb1} ${randomNumb2}`;

  return [question, String(answer)];
};

export default () => getGeneralLogic(termsOfGcdGame, getGcdLogic);
