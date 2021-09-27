import getGeneralLogic from '../index.js';
import getNumInTheRange from '../secondaryFunctions.js';

export const termsOfCalcGame = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operatorsColl = ['+', '-', '*'];
  const opindex = getNumInTheRange(operatorsColl.length - 1);
  const randomOperator = operatorsColl[opindex];
  return randomOperator;
};

const getCalculate = (operand1, operator, operand2) => {
  let answer;
  switch (operator) {
    case '+':
      answer = operand1 + operand2;
      break;
    case '-':
      answer = operand1 - operand2;
      break;
    case '*':
      answer = operand1 * operand2;
      break;
    default:
  }
  return answer;
};

export const getCalcLogic = () => {
  const randomOperand1 = getNumInTheRange();
  const randomOperand2 = getNumInTheRange();
  const randomOperator = getRandomOperator();

  const question = `Question: ${randomOperand1} ${randomOperator} ${randomOperand2}`;
  const answer = getCalculate(randomOperand1, randomOperator, randomOperand2);

  return [question, String(answer)];
};

export default () => getGeneralLogic(termsOfCalcGame, getCalcLogic);
