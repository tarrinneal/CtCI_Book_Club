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
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0],
];
var anothaOne1 = [
  [1, 1, 1, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0],
];

test("Changes matrix to have all 0's in any row or column containing a 0", () => {
  expect(JSON.stringify(zeroMatrix(testMatrix))).toBe(
    JSON.stringify(zeroMatrixSol(testMatrix1))
  );
  expect(JSON.stringify(zeroMatrix(anothaOne))).toBe(
    JSON.stringify(zeroMatrixSol(anothaOne1))
  );
});

var anothaOne2 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
var anothaOne3 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

var anothaOne4 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];
var anothaOne5 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

test("Doesn't break with edge cases", () => {
  expect(JSON.stringify(zeroMatrix(anothaOne2))).toBe(
    JSON.stringify(zeroMatrixSol(anothaOne3))
  );
  expect(JSON.stringify(zeroMatrix(anothaOne4))).toBe(
    JSON.stringify(zeroMatrixSol(anothaOne5))
  );
});
