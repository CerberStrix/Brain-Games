const primeLogic = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  let result = 'yes';
  for (let j = 2; j <= randomNumber / 2; j += 1) {
    if (randomNumber < 2 || randomNumber % j === 0) {
      result = 'no';
    }
  }

  console.log(`Question: ${randomNumber}`);

  return result;
};

export default primeLogic;
