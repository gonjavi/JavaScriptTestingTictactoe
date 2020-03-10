import './style.css';
import { Player, changePlayer } from './modules/player';
import render from './modules/gameboard';
import {
  checkWin,
  checkDraw,
  clearBoard,
} from './modules/game';

let player1;
let player2;
let win;
let symbol = '';
let boardf;
let draw;

document.getElementById('board').style.visibility = 'hidden';
document.getElementById('restart').style.visibility = 'hidden';

document.getElementById('start').onclick = () => {
  document.getElementById('board').style.visibility = 'visible';
  const name1 = document.getElementById('player1').value;
  const name2 = document.getElementById('player2').value;
  player1 = Player(name1);
  player2 = Player(name2);

  document.getElementById('symbol1').innerHTML = 'Player with symbol X is:';
  document.getElementById('symbol2').innerHTML = 'Player With Symbol O is:';
  if (player1.pname && player2.pname) {
    document.getElementById('p1').innerHTML = player1.pname;
    document.getElementById('p2').innerHTML = player2.pname;
    clearBoard();
  } else {
    document.getElementById('p1').innerHTML = 'player 1';
    document.getElementById('p2').innerHTML = 'player 2';
  }
  document.getElementById('start').style.visibility = 'hidden';
};
let a = '';
let b = '';
let c = '';
let d = '';
let e = '';
let f = '';
let g = '';
let h = '';
let i = '';

function blocKeys() {
  document.getElementById('0').onclick = null;
  document.getElementById('1').onclick = null;
  document.getElementById('2').onclick = null;
  document.getElementById('3').onclick = null;
  document.getElementById('4').onclick = null;
  document.getElementById('5').onclick = null;
  document.getElementById('6').onclick = null;
  document.getElementById('7').onclick = null;
  document.getElementById('8').onclick = null;
}

function readWinner() {
  if (win === true && symbol === 'O') {
    document.getElementById('restart').style.visibility = 'visible';
    document.getElementById('win_text').innerHTML = 'The winner is:';
    if (player2.pname) {
      document.getElementById('win_name').innerHTML = player2.pname;
    } else {
      document.getElementById('win_name').innerHTML = 'Player 2';
    }
    document.getElementById('restart').innerHTML = 'Play Again';
    blocKeys();
  }
  if (win === true && symbol === 'X') {
    document.getElementById('restart').style.visibility = 'visible';
    document.getElementById('win_text').innerHTML = 'The winner is:';
    if (player1.pname) {
      document.getElementById('win_name').innerHTML = player1.pname;
    } else {
      document.getElementById('win_name').innerHTML = 'Player 1';
    }
    document.getElementById('restart').innerHTML = 'Play Again';
    blocKeys();
  }
}

function readDraw() {
  document.getElementById('draw').innerHTML = 'The game is drawn';
  document.getElementById('restart').style.visibility = 'visible';
  document.getElementById('restart').innerHTML = 'Play Again';
  blocKeys();
}

document.getElementById('restart').onclick = () => {
  clearBoard();
  document.getElementById('symbol1').innerHTML = '';
  document.getElementById('symbol2').innerHTML = '';
  document.getElementById('p1').innerHTML = '';
  document.getElementById('p2').innerHTML = '';
  document.getElementById('win_text').innerHTML = '';
  document.getElementById('win_name').innerHTML = '';
  document.getElementById('restart').innerHTML = '';
  document.getElementById('start').style.visibility = 'visible';
  document.getElementById('board').style.visibility = 'hidden';
  window.location.reload();
};

function checkWinOrDraw(win) {
  if (win === true) {
    readWinner();
  } else {
    draw = checkDraw(boardf);
    if (draw === true) { readDraw(); }
  }
}

document.getElementById('0').onclick = () => {
  symbol = changePlayer();
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  document.getElementById('0').innerHTML = symbol;
  document.getElementById('0').value = symbol;
  a = symbol;
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  checkWinOrDraw(win);
  document.getElementById('0').onclick = null;
};

document.getElementById('1').onclick = () => {
  symbol = changePlayer();
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  document.getElementById('1').innerHTML = symbol;
  document.getElementById('1').value = symbol;
  b = symbol;
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  checkWinOrDraw(win);
  document.getElementById('1').onclick = null;
};

document.getElementById('2').onclick = () => {
  symbol = changePlayer();
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  document.getElementById('2').innerHTML = symbol;
  document.getElementById('2').value = symbol;
  c = symbol;
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  checkWinOrDraw(win);
  document.getElementById('2').onclick = null;
};

document.getElementById('3').onclick = () => {
  symbol = changePlayer();
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  document.getElementById('3').innerHTML = symbol;
  document.getElementById('3').value = symbol;
  d = symbol;
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  checkWinOrDraw(win);
  document.getElementById('3').onclick = null;
};

document.getElementById('4').onclick = () => {
  symbol = changePlayer();
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  document.getElementById('4').innerHTML = symbol;
  document.getElementById('4').value = symbol;
  e = symbol;
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  checkWinOrDraw(win);
  document.getElementById('4').onclick = null;
};

document.getElementById('5').onclick = () => {
  symbol = changePlayer();
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  document.getElementById('5').innerHTML = symbol;
  document.getElementById('5').value = symbol;
  f = symbol;
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  checkWinOrDraw(win);
  document.getElementById('5').onclick = null;
};

document.getElementById('6').onclick = () => {
  symbol = changePlayer();
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  document.getElementById('6').innerHTML = symbol;
  document.getElementById('6').value = symbol;
  g = symbol;
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  checkWinOrDraw(win);
  document.getElementById('6').onclick = null;
};

document.getElementById('7').onclick = () => {
  symbol = changePlayer();
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  document.getElementById('7').innerHTML = symbol;
  document.getElementById('7').value = symbol;
  h = symbol;
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  checkWinOrDraw(win);
  document.getElementById('7').onclick = null;
};

document.getElementById('8').onclick = () => {
  symbol = changePlayer();
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  document.getElementById('8').innerHTML = symbol;
  document.getElementById('8').value = symbol;
  i = symbol;
  boardf = render(a, b, c, d, e, f, g, h, i);
  win = checkWin(boardf);
  checkWinOrDraw(win);
  document.getElementById('8').onclick = null;
};