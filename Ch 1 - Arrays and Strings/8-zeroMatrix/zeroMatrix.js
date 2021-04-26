//Write an algorithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0.

function zeroMatrix(matrix) {
  let rows = {};
  let cols = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = 1;
        cols[j] = 1;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (rows[i]) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
    }
    for (let j = 0; j < matrix[i].length; j++) {
      if (cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

module.exports = zeroMatrix;
