import { changePlayer } from '../modules/player';

test('it tests the change of player', () => {
  expect(changePlayer()).toEqual('X');
});

test('it tests the change of player', () => {
  expect(changePlayer()).toBe('O');
});