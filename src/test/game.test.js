const game = require('../modules/game');


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