const Player = (name) => {
  const pname = name;
  return pname;
};
let symbol = 'O';
const changePlayer = () => {
  if (symbol === 'X') {
    symbol = 'O';
  } else {
    symbol = 'X';
  }
  return symbol;
};

export { Player, changePlayer };