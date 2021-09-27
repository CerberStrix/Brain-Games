import getGeneralLogic from '../index.js';
import { getNumInTheRange, checkPrime } from '../utilites.js';

export const termsOfPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getPrimeLogic = () => {
  const randomNumber = getNumInTheRange(1000);
  const answer = checkPrime(randomNumber);
  const question = `Question: ${randomNumber}`;

  return [question, answer];
};

export default () => getGeneralLogic(termsOfPrimeGame, getPrimeLogic);
