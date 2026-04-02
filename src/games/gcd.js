import runGame from '../index.js'; 

const description = 'Find the greatest common divisor of given numbers.';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();

  return [question, correctAnswer];
};
export default () => runGame(description, generateRound);