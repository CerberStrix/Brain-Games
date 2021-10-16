import readlineSync from 'readline-sync';

const roundCount = 3;

const getGeneralLogic = (gameTerms, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTerms);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = getGameData();

    console.log(`Question: ${question}`);

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
