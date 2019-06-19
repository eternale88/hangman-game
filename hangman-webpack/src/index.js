import HangmanClass from './hangman'
import {getPuzzle} from './requests'

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1;

// puzzleEl.textContent = game1.puzzle
// guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.statusMessage;

  game1.puzzle.split('').forEach((letter) => {
    const letterEl = document.createElement('span');
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const data = await getPuzzle('2');
  game1 = new HangmanClass(data.puzzle, 5);
  render();
};

document.querySelector('#reset').addEventListener('click', () => {
  startGame();
});
startGame();
