//Write an algorithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0.

function zeroMatrix(matrix) {

  let rowsToZero = new Set();

  let columnsToZero = new Set();


  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rowsToZero.add(i);
        columnsToZero.add(j);
      }
    }
  }

  rowsToZero.forEach((row) => {
    for (let i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0;
    }
  })

  columnsToZero.forEach((col) => {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  })
  return matrix;
}

module.exports = zeroMatrix;
