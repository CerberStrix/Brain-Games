export const termsOfIsEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getEvenLogic = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const answer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;

  return [question, answer];
};
