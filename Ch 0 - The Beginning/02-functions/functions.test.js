const subtraction = require('./subtraction');
const subtractionSol = require('./functionsSol');

test('Correctly identifies strings that are permutations', () => {
  expect(subtraction(5, 3)).toBe(subtractionSol(5, 3));
});
