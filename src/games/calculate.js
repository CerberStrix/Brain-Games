export const termsOfCalcGame = 'What is the result of the expression?';

export const getCalcLogic = () => {
  const randomOperand1 = Math.floor(Math.random() * 100);
  const randomOperand2 = Math.floor(Math.random() * 100);

  const operatorsColl = ['+', '-', '*'];
  const opindex = Math.floor(Math.random() * 3);
  const randomOperator = operatorsColl[opindex];

  const question = `Question: ${randomOperand1} ${randomOperator} ${randomOperand2}`;

  let answer;
  switch (randomOperator) {
    case '+':
      answer = randomOperand1 + randomOperand2;
      break;
    case '-':
      answer = randomOperand1 - randomOperand2;
      break;
    case '*':
      answer = randomOperand1 * randomOperand2;
      break;
    default:
  }
  return [question, String(answer)];
};
