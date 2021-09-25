export const termsOfPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getPrimeLogic = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  let answer = 'yes';
  for (let j = 2; j <= randomNumber / 2; j += 1) {
    if (randomNumber < 2 || randomNumber % j === 0) {
      answer = 'no';
    }
  }
  const question = `Question: ${randomNumber}`;

  return [question, answer];
};
