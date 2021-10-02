import getGeneralLogic from '../index.js';
import { getNumbInRange } from '../secondaryFunctions.js';

export const termsOfIsEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

export const getEvenLogic = () => {
  const randomNumber = getNumbInRange();
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  const question = `${randomNumber}`;

  return [question, answer];
};

export default () => getGeneralLogic(termsOfIsEvenGame, getEvenLogic);
