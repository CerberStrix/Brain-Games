import readlineSync from 'readline-sync';

const getGeneralLogic = (gameTerms, getGameData) => {
  console.log('Welcome to the Brains Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTerms);

  const maxGamesRound = 3;
  for (let i = 0; i < maxGamesRound; i += 1) {
    const [question, answer] = getGameData();

    console.log(question);

    const userAnswer = readlineSync.question();

    if (answer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default getGeneralLogic;
