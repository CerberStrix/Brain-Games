import getGeneralLogic from '../index.js';
import getNumInTheRange from '../secondaryFunctions.js';

export const termsOfIsEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);
const checkEven = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

export const getEvenLogic = () => {
  const randomNumber = getNumInTheRange();
  const answer = checkEven(randomNumber);
  const question = `Question: ${randomNumber}`;

  return [question, answer];
};

export default () => getGeneralLogic(termsOfIsEvenGame, getEvenLogic);
