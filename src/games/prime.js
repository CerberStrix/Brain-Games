import getGeneralLogic from '../index.js';
import getNumbInRange from '../secondaryFunctions.js';

export const termsOfPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let j = 2; j <= number / 2; j += 1) {
    if (number < 2 || number % j === 0) {
      return false;
    }
  } return true;
};

export const getPrimeLogic = () => {
  const randomNumber = getNumbInRange(0, 1000);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = `${randomNumber}`;

  return [question, answer];
};

export default () => getGeneralLogic(termsOfPrimeGame, getPrimeLogic);
