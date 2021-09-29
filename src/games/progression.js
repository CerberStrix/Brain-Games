import getGeneralLogic from '../index.js';
import { getRandomNumb, getNumbInRange } from '../secondaryFunctions.js';

export const termsOfProgressionGame = 'What number is missing in the progression?';

const getProgression = (startOfProgression, progressionLength, progressionStep) => {
  const coll = [];
  let result = startOfProgression;
  for (let j = 0; j < progressionLength; j += 1) {
    coll.push(result);
    result += progressionStep;
  }
  return coll;
};

const hideElementOfColl = (coll, randomIndex) => {
  const rawColl = coll;
  rawColl[randomIndex] = '..';
  const readyStringOfColl = rawColl.join(' ');
  return readyStringOfColl;
};

export const getProgressionLogic = () => {
  const startOfProgression = getRandomNumb();
  const progressionLength = getNumbInRange(5, 10);
  const progressionStep = getNumbInRange(3, 12);

  const progressionColl = getProgression(startOfProgression, progressionLength, progressionStep);

  const randomIndex = getRandomNumb(progressionLength - 1);
  const answer = progressionColl[randomIndex];
  const question = hideElementOfColl(progressionColl, randomIndex);

  return [question, String(answer)];
};

export default () => getGeneralLogic(termsOfProgressionGame, getProgressionLogic);
