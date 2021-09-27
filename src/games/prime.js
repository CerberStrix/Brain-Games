import getGeneralLogic from '../index.js';
import getNumInTheRange from '../secondaryFunctions.js';

export const termsOfPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let j = 2; j <= number / 2; j += 1) {
    if (number < 2 || number % j === 0) {
      return false;
    }
  } return true;
};

const checkPrime = (number) => {
  const result = isPrime(number) ? 'yes' : 'no';
  return result;
};

export const getPrimeLogic = () => {
  const randomNumber = getNumInTheRange(1000);
  const answer = checkPrime(randomNumber);
  const question = `Question: ${randomNumber}`;

  return [question, answer];
};

export default () => getGeneralLogic(termsOfPrimeGame, getPrimeLogic);
