const boxes = document.querySelectorAll('.box');
const resetButton = document.querySelector('#resetButton');
const newGameButton = document.querySelector('#newGame');
const msg = document.querySelector('.msg');
const winnerMessage = document.querySelector('#message');

let turnO = true;
let count = 1;
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (turnO) {
      box.innerText = 'O';
      box.style.color = 'red';
      turnO = false;
    } else {
      box.innerText = 'X';
      box.style.color = 'blue';
      turnO = true;
    } 
    count++;
    box.disabled = true;
    checkWin();
  });
});

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msg.classList.add('hide');
};

function enableBoxes() {
  boxes.forEach((box) => {
    box.innerText = '';
    box.disabled = false;
  });
}

function disableBoxes() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

function showWinner(winner) {
    if(count>9){
        winnerMessage.innerText = `It's a Draw!`;
        msg.classList.remove('hide');
        return;
    }else{
  winnerMessage.innerText = `Player ${winner} has won the game!`;
  msg.classList.remove('hide');
  return;
}
}

function checkWin() {
  for (let pattern of winningCombos) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== '' && pos1 === pos2 && pos2 === pos3) {
      disableBoxes();
      showWinner(pos1);
      return;
    }
  }
}

newGameButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', resetGame);
