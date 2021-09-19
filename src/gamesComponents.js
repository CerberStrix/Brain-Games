export const greetingsByName = (name) => `Hello, ${name}!`;

export const termsIsEvenG = 'Answer "yes" if the number is even, otherwise answer "no".';
export const termsCalcG = 'What is the result of the expression?';
export const termsGcdG = 'Find the greatest common divisor of given numbers.';
export const termsProgressionG = 'What number is missing in the progression?';
export const termsPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const finalResult = (name, game) => {
  if (game === true) {
    return `Congratulations, ${name}!`;
  }
  return `'${game[1]}' is wrong answer ;(. Correct answer was '${game[0]}'\nLet's try again, ${name}!`;
};
