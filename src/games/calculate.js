import getGeneralLogic from '../index.js';
import getNumbInRange from '../utils.js';

export const termsOfCalcGame = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operatorsColl = ['+', '-', '*'];
  const opindex = getNumbInRange(0, operatorsColl.length - 1);
  const randomOperator = operatorsColl[opindex];
  return randomOperator;
};

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
};

export const getCalcLogic = () => {
  const randomOperand1 = getNumbInRange();
  const randomOperand2 = getNumbInRange();
  const randomOperator = getRandomOperator();

  const question = `${randomOperand1} ${randomOperator} ${randomOperand2}`;
  const answer = calculate(randomOperand1, randomOperand2, randomOperator);

  return [question, String(answer)];
};

export default () => getGeneralLogic(termsOfCalcGame, getCalcLogic);
