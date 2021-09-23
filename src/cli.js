/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

const greetingByName = () => {
  const name = readlineSync.question('May I have your name? ');
  return (`Hello, ${name}!`);
};

export default greetingByName;
