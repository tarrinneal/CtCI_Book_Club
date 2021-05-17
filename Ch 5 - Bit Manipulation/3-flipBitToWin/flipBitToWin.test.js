const flipBitToWin = require('./flipBitToWin');
const flipBitToWinSol = require('./flipBitToWinSol');

test('Basic flipBitToWin test', () => {
  expect(flipBitToWin(1775)).toBe(8);
});
