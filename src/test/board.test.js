import render from '../modules/gameboard';

test('it shows the board passed as parameter', () => {
  expect(render()).toMatchObject(['', '', '', '', '', '', '', '', '']);
});

test('it shows the board passed as parameter', () => {
  expect(render('X', 'O', '', '', '', '', '', '', '')).toMatchObject(['X', 'O', '', '', '', '', '', '', '']);
});