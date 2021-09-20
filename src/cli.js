/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brains Games!');
  const name = readlineSync.question('May I have your name? ');
  return (`Hello, ${name}!`);
};

export default greeting;
