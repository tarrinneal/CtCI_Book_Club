const rotateMatrix = require('./rotateMatrix');
const rotateMatrixSol = require('./rotateMatrixSol');

var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1],
];
var testMatrix1 = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1],
];
var anothaOne = [
  [0, 1, 1, 0],
  [1, 1, 2, 1],
  [4, 3, 2, 1],
  [9, 9, 9, 9],
];
var anothaOne1 = [
  [0, 1, 1, 0],
  [1, 1, 2, 1],
  [4, 3, 2, 1],
  [9, 9, 9, 9],
];

test('Rotates matrixes without error', () => {
  expect(JSON.stringify(rotateMatrix(testMatrix))).toBe(
    JSON.stringify(rotateMatrixSol(testMatrix1))
  );
  expect(JSON.stringify(rotateMatrix(anothaOne))).toBe(
    JSON.stringify(rotateMatrixSol(anothaOne1))
  );
});
