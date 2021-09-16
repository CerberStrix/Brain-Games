/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

const isEvenLogic = () => {
  let i = 0;
  while (i < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    const isEven = (randomNumber % 2 === 0) ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const result = [isEven, userAnswer];
    if (userAnswer === isEven) {
      console.log('Correct!');
      i += 1;
    } else {
      return result;
    }
  }
  return true;
};

export default isEvenLogic;
