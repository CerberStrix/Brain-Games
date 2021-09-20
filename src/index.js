/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';

const generalLogic = (gameTerms, gameLogic) => {
  console.log('Welcome to the Brains Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTerms);
  for (let i = 0; i < 3; i += 1) {
    const trueAnswer = String(gameLogic());
    const userAnwer = readlineSync.question('Your answer: ');
    if (trueAnswer === userAnwer) {
      console.log('Correct!');
    } else {
      return `'${userAnwer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${name}!`;
    }
  } return `Congratulations, ${name}!`;
};

export default generalLogic;
