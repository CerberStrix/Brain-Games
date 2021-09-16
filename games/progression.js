/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import readlineSync from 'readline-sync';

const progression = () => {
  let i = 0;
  while (i < 3) {
    const digitsColl = [];
    const progressionLength = Math.floor(Math.random() * (5) + 5);
    const progressionStep = Math.floor(Math.random() * 10 + 1);
    let startOfProgression = Math.floor(Math.random() * 100);
    for (let j = 0; j < progressionLength; j += 1) {
      digitsColl.push(startOfProgression);
      startOfProgression += progressionStep;
    }

    const randomIndex = Math.floor(Math.random() * (progressionLength - 1));
    const digitForQuestion = digitsColl[randomIndex];
    digitsColl[randomIndex] = '..';

    console.log(`Question: ${digitsColl.join(' ')}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const result = [digitForQuestion, userAnswer];
    if (Number(userAnswer) === digitForQuestion) {
      console.log('Correct!');
      i += 1;
    } else {
      return result;
    }
  }
  return true;
};

export default progression;
