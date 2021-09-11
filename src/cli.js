import readlineSync from "readline-sync";

const name = readlineSync.question(
  "Welcome to the Brain Games!\nMay I have your name? "
);

export const greeting = console.log(`Hello, ${name}!`);
