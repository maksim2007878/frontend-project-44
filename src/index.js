import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const runGame = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  // --- Блок пасхалок ---
  if (name === 'f') {
    throw new Error('You found the respect button! (and broke the game)');
  }
  if (name.toLowerCase() === 'neo') {
    console.log('Wake up, Neo... The Matrix has you...');
  }
  if (name.toLowerCase() === 'admin') {
    console.log('Access granted. Welcome back, Master.');
    console.log('Everything is already correct. You win!');
    return;
  }
  if (name === '') {
    console.log('Anonymous? You very cool.');
  }
  if (name === 'win') {
    console.log('you activated cheat code! You win')
    return;
  }
  // ---------------------

  console.log(`Hello, ${name}!`);
  console.log(description);

  const roundsCount = 3;
  const successMessages = ['Correct!', 'Well done!', 'Nice job!', 'You are on fire! 🔥'];

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === 'win') {
      console.log('Cheat code activated! Skipping to the end...');
      break;
    }
    if (userAnswer === 'loss') {
        console.log('Oh, you bad, luck to be the next time');
        break;
    }

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    const randomMessage = successMessages[getRandomInt(0, successMessages.length - 1)];
    console.log(randomMessage);
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;