import getGeneralLogic from '../index.js';
import getNumInTheRange from '../secondaryFunctions.js';

const getGcd = (a, b) => {
  let item1 = a;
  let item2 = b;
  while (item1 !== 0 && item2 !== 0) {
    if (item1 > item2) {
      item1 %= item2;
    } else {
      item2 %= item1;
    }
  }
  return item1 + item2;
};

export const termsOfGcdGame = 'Find the greatest common divisor of given numbers.';

export const getGcdLogic = () => {
  const randomNumb1 = getNumInTheRange();
  const randomNumb2 = getNumInTheRange();

  const answer = getGcd(randomNumb1, randomNumb2);
  const question = `Question: ${randomNumb1} ${randomNumb2}`;

  return [question, String(answer)];
};

export default () => getGeneralLogic(termsOfGcdGame, getGcdLogic);
