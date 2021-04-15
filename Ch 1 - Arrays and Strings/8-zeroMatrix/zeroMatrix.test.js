const zeroMatrix = require('./zeroMatrix');
const zeroMatrixSol = require('./zeroMatrixSol');

var testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];
var testMatrix1 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];
var anothaOne = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0],
];
var anothaOne1 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0],
];

test('Rotates matrixes without error', () => {
  expect(JSON.stringify(zeroMatrix(testMatrix))).toBe(
    JSON.stringify(zeroMatrixSol(testMatrix1))
  );
  expect(JSON.stringify(zeroMatrix(anothaOne))).toBe(
    JSON.stringify(zeroMatrixSol(anothaOne1))
  );
});
