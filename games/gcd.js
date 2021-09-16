import readlineSync from 'readline-sync';

const gcd = () => {
  let i = 0;
  while (i < 3) {
    const randomOperand1 = Math.floor(Math.random() * 100);
    const randomOperand2 = Math.floor(Math.random() * 100);

    const gcdLogic = (a, b) => {
      while (a !== 0 && b !== 0) {
        if (a > b) {
          a %= b;
        } else {
          b %= a;
        }
      }
      return a + b;
    };
    const correctResult = gcdLogic(randomOperand1, randomOperand2);

    console.log(`Question: ${randomOperand1} ${randomOperand2}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const result = [correctResult, userAnswer];
    if (Number(userAnswer) === result) {
      console.log('Correct!');
      i += 1;
    } else {
      return result;
    }
  }
  return true;
};

export default gcd;
