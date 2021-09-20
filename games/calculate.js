const calcLogic = () => {
  const randomOperand1 = Math.floor(Math.random() * 100);
  const randomOperand2 = Math.floor(Math.random() * 100);

  const operatorsColl = ['+', '-', '*'];
  const opindex = Math.floor(Math.random() * 3);
  const randomOperator = operatorsColl[opindex];

  const computationForConsol = `${randomOperand1} ${randomOperator} ${randomOperand2}`;
  console.log(`Question: ${computationForConsol}`);

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
  return result;
};

export default calcLogic;
