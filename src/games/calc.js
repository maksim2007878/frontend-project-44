import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();

  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);