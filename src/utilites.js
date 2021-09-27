const calculate = (operand1, operator, operand2) => {
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

const getNumInTheRange = (defaultStep = 10) => Math.floor(Math.random() * defaultStep);

const getRandomOperator = () => {
  const operatorsColl = ['+', '-', '*'];
  const opindex = getNumInTheRange(operatorsColl.length - 1);
  const randomOperator = operatorsColl[opindex];
  return randomOperator;
};

const getGcd = (a, b) => {
  let item1 = a;
  let item2 = b;
  while (item1 !== 0 && item2 !== 0) {
    if (item1 > item2) {
      item1 %= item2;
    } else {
      item2 %= item1;
    }
  }
  return item1 + item2;
};

const isEven = (number) => (number % 2 === 0);
const checkEven = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const isPrime = (number) => {
  for (let j = 2; j <= number / 2; j += 1) {
    if (number < 2 || number % j === 0) {
      return false;
    }
  } return true;
};

const checkPrime = (number) => {
  const result = isPrime(number) ? 'yes' : 'no';
  return result;
};

export {
  calculate, getNumInTheRange, getRandomOperator, getGcd, checkEven, checkPrime,
};
