// winning positions wp
const wp = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let boardO;
let boardX;
let win = false;

const checkWin = (board) => {
  wp.forEach((row) => {
    row.forEach((cell) => {
      if (board[cell] === 'O') {
        boardO += 1;
        if (boardO === 3) {
          win = true;
        }
      }
      if (board[cell] === 'X') {
        boardX += 1;
        if (boardX === 3) {
          win = true;
        }
      }
    });
    boardX = 0;
    boardO = 0;
  });
  return win;
};

const checkDraw = (board) => {
  let draw = false;
  let x = 0;
  board.forEach((square) => {
    if (square === 'X' || square === 'O') {
      x += 1;
    }
    if (x === 9) {
      draw = true;
    }
  });
  return draw;
};

const clearBoard = () => {
  document.getElementById('0').innerHTML = '';
  document.getElementById('0').value = '';
  document.getElementById('1').innerHTML = '';
  document.getElementById('1').value = '';
  document.getElementById('2').innerHTML = '';
  document.getElementById('2').value = '';
  document.getElementById('3').innerHTML = '';
  document.getElementById('3').value = '';
  document.getElementById('4').innerHTML = '';
  document.getElementById('4').value = '';
  document.getElementById('5').innerHTML = '';
  document.getElementById('5').value = '';
  document.getElementById('6').innerHTML = '';
  document.getElementById('6').value = '';
  document.getElementById('7').innerHTML = '';
  document.getElementById('7').value = '';
  document.getElementById('8').innerHTML = '';
  document.getElementById('8').value = '';
  boardO = 0;
  boardX = 0;
};

export {
  checkWin,
  checkDraw,
  clearBoard,
};