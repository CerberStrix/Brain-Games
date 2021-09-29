import getGeneralLogic from '../index.js';
import { getRandomNumb } from '../secondaryFunctions.js';

export const termsOfIsEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  const result = (number % 2 === 0) ? 'yes' : 'no';
  return result;
};

export const getEvenLogic = () => {
  const randomNumber = getRandomNumb();
  const answer = isEven(randomNumber);
  const question = `${randomNumber}`;

  return [question, answer];
};

export default () => getGeneralLogic(termsOfIsEvenGame, getEvenLogic);
