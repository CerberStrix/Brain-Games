/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';

const getGeneralLogic = (gameTerms, gameLogic) => {
  console.log('Welcome to the Brains Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTerms);

  const victoryMessage = `Congratulations, ${name}!`;

  const maxGamesRound = 3;
  for (let i = 0; i < maxGamesRound; i += 1) {
    const [userAnswer, trueAnswer] = gameLogic();

    const defeatMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${name}!`;

    const processState = (trueAnswer === userAnswer) ? console.log('Correct!') : 'Defeat!';
    if (processState === 'Defeat!') {
      return defeatMessage;
    }
  } return victoryMessage;
};

export default getGeneralLogic;
