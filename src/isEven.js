import readlineSync from 'readline-sync';

export const termsOfIsEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getEvenLogic = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const result = (randomNumber % 2 === 0) ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question();

  const results = [];
  results.push(userAnswer);
  results.push(String(result));

  return results;
};
