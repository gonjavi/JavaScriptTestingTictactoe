const game = require('../modules/game');

// test for win
test('it returns true if there is a victory', () => {
  expect(game.checkWin(['', '', '', 'O', 'O', 'O', '', '', ''])).toBe(true);
});
test('it returns true if there is a victory', () => {
  expect(game.checkWin(['', '', '', '', '', '', 'O', 'O', 'O'])).toBe(true);
});
test('it returns true if there is a victorys', () => {
  expect(game.checkWin(['O', '', '', 'O', '', '', 'O', '', ''])).toBe(true);
});
test('it returns true if there is a victory', () => {
  expect(game.checkWin(['', 'O', '', '', 'O', '', '', 'O', ''])).toBe(true);
});
test('it returns true if there is a victory', () => {
  expect(game.checkWin(['', '', '0', '', '', 'O', '', '', 'O'])).toBe(true);
});
test('it returns true if there is a victory', () => {
  expect(game.checkWin(['O', '', '', '', 'O', '', '', '', 'O'])).toBe(true);
});
test('it returns true if there is a victory', () => {
  expect(game.checkWin(['', '', 'O', '', 'O', '', 'O', '', ''])).toBe(true);
});
test('it returns true if there is a victory', () => {
  expect(game.checkWin(['', '', '', 'X', 'X', 'X', '', '', ''])).toBe(true);
});
test('it returns true if there is a victory', () => {
  expect(game.checkWin(['', '', '', '', '', '', 'X', 'X', 'X'])).toBe(true);
});
test('it returns true if there is a victorys', () => {
  expect(game.checkWin(['X', '', '', 'X', '', '', 'X', '', ''])).toBe(true);
});
test('it returns true if there is a victory', () => {
  expect(game.checkWin(['', 'X', '', '', 'X', '', '', 'X', ''])).toBe(true);
});
test('it returns true if there is a victory', () => {
  expect(game.checkWin(['', '', 'X', '', '', 'X', '', '', 'X'])).toBe(true);
});
test('it returns true if there is a victory', () => {
  expect(game.checkWin(['X', '', '', '', 'X', '', '', '', 'X'])).toBe(true);
});
test('it returns true if there is a victory', () => {
  expect(game.checkWin(['', '', 'X', '', 'X', '', 'X', '', ''])).toBe(true);
});

test('it returns false if there is not victory', () => {
  expect(game.checkWin(['', '', '', '', '', '', '', '', ''])).toBe(true);
});


// tests for a draw
test('it returns true if the game is a draw', () => {
  expect(game.checkDraw(['X', 'X', 'O', 'O', 'O', 'X', 'X', 'X', 'O'])).toBe(true);
});
test('it returns true if the game is a draw', () => {
  expect(game.checkDraw(['X', 'X', 'X', 'O', 'O', 'X', 'X', 'X', 'O'])).toBe(true);
});
test('it returns true if the game is a draw', () => {
  expect(game.checkDraw(['X', 'X', 'O', 'O', 'O', 'X', 'X', 'X', 'O'])).toBe(true);
});
