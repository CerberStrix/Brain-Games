import getGeneralLogic from '../index.js';
import { getNumbInRange } from '../secondaryFunctions.js';

export const termsOfGcdGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

export const getGcdLogic = () => {
  const randomNumb1 = getNumbInRange();
  const randomNumb2 = getNumbInRange();

  const answer = getGcd(randomNumb1, randomNumb2);
  const question = `${randomNumb1} ${randomNumb2}`;

  return [question, String(answer)];
};

export default () => getGeneralLogic(termsOfGcdGame, getGcdLogic);
