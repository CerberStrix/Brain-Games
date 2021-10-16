import getGeneralLogic from '../index.js';
import getNumbInRange from '../utils.js';

export const termsOfProgressionGame = 'What number is missing in the progression?';

const getProgression = (startOfProgression, progressionLength, progressionStep) => {
  const collection = [];
  let result = startOfProgression;
  for (let j = 0; j < progressionLength; j += 1) {
    collection.push(result);
    result += progressionStep;
  }
  return collection;
};

const hideElementOfColl = (coll, randomIndex) => {
  const collToHide = coll;
  collToHide[randomIndex] = '..';
  const strWithHideElement = collToHide.join(' ');
  return strWithHideElement;
};

export const getProgressionLogic = () => {
  const startOfProgression = getNumbInRange();
  const progressionLength = getNumbInRange(5, 10);
  const progressionStep = getNumbInRange(3, 12);

  const progressionColl = getProgression(startOfProgression, progressionLength, progressionStep);

  const randomIndex = getNumbInRange(0, progressionLength - 1);
  const answer = progressionColl[randomIndex];
  const question = hideElementOfColl(progressionColl, randomIndex);

  return [question, String(answer)];
};

export default () => getGeneralLogic(termsOfProgressionGame, getProgressionLogic);
