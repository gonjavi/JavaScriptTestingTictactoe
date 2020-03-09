const player = require('../modules/player');

test('it tests the change of player', () => {
  expect(player.changepPlayer().toBe('O'));
});

test('it tests the change of player', () => {
  expect(player.changepPlayer().toBe('X'));
});