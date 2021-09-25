export const termsOfGcdGame = 'Find the greatest common divisor of given numbers.';

export const getGcdLogic = () => {
  const randomOperand1 = Math.floor(Math.random() * 100);
  const randomOperand2 = Math.floor(Math.random() * 100);

  const gcd = (a, b) => {
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
  const answer = gcd(randomOperand1, randomOperand2);
  const question = `Question: ${randomOperand1} ${randomOperand2}`;

  return [question, String(answer)];
};
