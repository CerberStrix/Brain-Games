const isEvenLogic = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const isEven = (randomNumber % 2 === 0) ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}`);

  return isEven;
};

export default isEvenLogic;
