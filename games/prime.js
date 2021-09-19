import readlineSync from 'readline-sync';

const primeLogic = () => {
  let i = 0;
  while (i < 3) {
    const randomNumber = Math.floor(Math.random() * 1000);
    let isPrime = 'yes';
    for (let j = 2; j <= randomNumber / 2; j += 1) {
      if (randomNumber < 2 || randomNumber % j === 0) {
        isPrime = 'no';
      }
    }

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const result = [isPrime, userAnswer];
    if (userAnswer === isPrime) {
      console.log('Correct!');
      i += 1;
    } else {
      return result;
    }
  }
  return true;
};

export default primeLogic;
