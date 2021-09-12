/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

const name = readlineSync.question('Welcome to the Brains Games!\nMay I have your name? ');

export const greeting = `Hello, ${name}!`;
