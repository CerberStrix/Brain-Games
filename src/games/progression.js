export const termsOfProgressionGame = 'What number is missing in the progression?';

export const getProgressionLogic = () => {
  const digitsColl = [];
  const progressionLength = Math.floor(Math.random() * (5) + 6);
  const progressionStep = Math.floor(Math.random() * 10 + 1);
  let startOfProgression = Math.floor(Math.random() * 100);
  for (let j = 0; j < progressionLength; j += 1) {
    digitsColl.push(startOfProgression);
    startOfProgression += progressionStep;
  }
  const randomIndex = Math.floor(Math.random() * (progressionLength - 1));
  const answer = digitsColl[randomIndex];
  digitsColl[randomIndex] = '..';
  const question = `Question: ${digitsColl.join(' ')}`;

  return [question, String(answer)];
};
