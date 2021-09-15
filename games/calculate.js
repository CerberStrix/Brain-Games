import readlineSync from 'readline-sync';

const calcLogic = (name) => {
  let i = 0;
  while (i < 3) {
    const randomOperand1 = Math.floor(Math.random() * 100);
    const randomOperand2 = Math.floor(Math.random() * 100);

    const operatorsColl = ['+', '-', '*'];
    const opindex = Math.floor(Math.random() * 3);
    const randomOperator = operatorsColl[opindex];

    const computationForConsol = `${randomOperand1} ${randomOperator} ${randomOperand2}`;
    console.log(`Question: ${computationForConsol}`);

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
        answer = false;
    }

    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      return `${userAnswer} is wrong answer ;(. Correct answer was ${answer}\nLet's try again!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export default calcLogic;
