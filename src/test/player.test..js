const player = require('../modules/player');

test('it tests the change of player', () => {
  expect(player.changepPlayer('X').toBe('O'));
});

test('it tests the change of player', () => {
  expect(player.changepPlayer('O').toBe('X'));
});