import getGeneralLogic from '../index.js';
import { getRandomNumb } from '../secondaryFunctions.js';

export const termsOfCalcGame = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operatorsColl = ['+', '-', '*'];
  const opindex = getRandomNumb(operatorsColl.length - 1);
  const randomOperator = operatorsColl[opindex];
  return randomOperator;
};

const getCalculate = (operand1, operand2, operator) => {
  let answer;
  switch (operator) {
    case '+':
      answer = operand1 + operand2;
      return answer;
    case '-':
      answer = operand1 - operand2;
      return answer;
    case '*':
      answer = operand1 * operand2;
      return answer;
    default:
      console.log(`Error(operation ${operator} is not supported`);
  } return false;
};

export const getCalcLogic = () => {
  const randomOperand1 = getRandomNumb();
  const randomOperand2 = getRandomNumb();
  const randomOperator = getRandomOperator();

  const question = `${randomOperand1} ${randomOperator} ${randomOperand2}`;
  const answer = getCalculate(randomOperand1, randomOperand2, randomOperator);

  return [question, String(answer)];
};

export default () => getGeneralLogic(termsOfCalcGame, getCalcLogic);
