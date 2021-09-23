import readlineSync from 'readline-sync';

export const termsOfCalcGame = 'What is the result of the expression?';

export const getCalcLogic = () => {
  const randomOperand1 = Math.floor(Math.random() * 100);
  const randomOperand2 = Math.floor(Math.random() * 100);

  const operatorsColl = ['+', '-', '*'];
  const opindex = Math.floor(Math.random() * 3);
  const randomOperator = operatorsColl[opindex];

  const computationForConsol = `${randomOperand1} ${randomOperator} ${randomOperand2}`;
  console.log(`Question: ${computationForConsol}`);

  const userAnswer = readlineSync.question();

  let result;
  switch (randomOperator) {
    case '+':
      result = randomOperand1 + randomOperand2;
      break;
    case '-':
      result = randomOperand1 - randomOperand2;
      break;
    case '*':
      result = randomOperand1 * randomOperand2;
      break;
    default:
  }
  const results = [];
  results.push(userAnswer);
  results.push(String(result));

  return results;
};
