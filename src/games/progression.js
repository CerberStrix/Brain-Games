import getGeneralLogic from '../index.js';
import { getNumInTheRange } from '../utilits.js';

export const termsOfProgressionGame = 'What number is missing in the progression?';

export const getProgressionLogic = () => {
  const digitsColl = [];
  const progressionLength = getNumInTheRange(5) + 6;
  const progressionStep = getNumInTheRange(10) + 1;
  let startOfProgression = getNumInTheRange(100);
  for (let j = 0; j < progressionLength; j += 1) {
    digitsColl.push(startOfProgression);
    startOfProgression += progressionStep;
  }
  const randomIndex = getNumInTheRange(progressionLength - 1);
  const answer = digitsColl[randomIndex];
  digitsColl[randomIndex] = '..';
  const question = `Question: ${digitsColl.join(' ')}`;

  return [question, String(answer)];
};

export default () => getGeneralLogic(termsOfProgressionGame, getProgressionLogic);
