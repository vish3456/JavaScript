let randomNumber = Math.ceil(Math.random() * 100);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrhigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Not a valid number');
  } else if (guess < 1) {
    alert('Number is too small');
  } else if (guess > 100) {
    alert('Number is too big');
  } else {
    prevGuesses.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game over! Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right ');
    endGame();
  } else if (guess > randomNumber) {
    displayMessage('Your guess is too large');
  } else {
    displayMessage('Your guess is too small');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    randomNumber = Math.ceil(Math.random() * 100);
    prevGuesses = [];
    numGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    lowOrhigh.innerHTML = '';
    playGame = true;
  });
}
