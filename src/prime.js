import readlineSync from 'readline-sync';

export const termsOfPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getPrimeLogic = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  let result = 'yes';
  for (let j = 2; j <= randomNumber / 2; j += 1) {
    if (randomNumber < 2 || randomNumber % j === 0) {
      result = 'no';
    }
  }

  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question();

  const results = [];
  results.push(userAnswer);
  results.push(String(result));

  return results;
};
