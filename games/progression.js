const progressionLogic = () => {
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

  return digitForQuestion;
};

export default progressionLogic;
