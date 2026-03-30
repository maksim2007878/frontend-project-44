import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Кто ты воин? ');
  console.log(`Приветствую, ${name}!`);
};