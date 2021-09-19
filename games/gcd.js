import readlineSync from 'readline-sync';

const gcd = () => {
  let i = 0;
  while (i < 3) {
    const randomOperand1 = Math.floor(Math.random() * 100);
    const randomOperand2 = Math.floor(Math.random() * 100);

    const gcdLogic = (a, b) => {
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
    const correctResult = gcdLogic(randomOperand1, randomOperand2);

    console.log(`Question: ${randomOperand1} ${randomOperand2}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const result = [correctResult, userAnswer];
    if (Number(userAnswer) === correctResult) {
      console.log('Correct!');
      i += 1;
    } else {
      return result;
    }
  }
  return true;
};

export default gcd;
