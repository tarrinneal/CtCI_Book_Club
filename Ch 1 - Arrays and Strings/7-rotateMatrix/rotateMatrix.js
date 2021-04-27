//Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateMatrix = function (matrix) {
  let edge = matrix.length - 1;

  let movePixels = function (row, col) {
    // starts at m[row][col]
    // moves to m[col][edge - row]
    let fromRow;
    let fromCol;
    let fromPixel;

    // first transformation
    let toRow = row; // 0
    let toCol = col; // 1
    let toPixel = matrix[row][col];

    // Do rotational transformation 4 times
    for (let i = 0; i < 4; i++) {
      fromRow = toRow;
      fromCol = toCol;
      toRow = fromCol;
      toCol = edge - fromRow;

      fromPixel = toPixel;
      toPixel = matrix[toRow][toCol];
      matrix[toRow][toCol] = fromPixel;
    }
  };

  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = i; j < edge - i; j++) {
      movePixels(i, j);
    }
  }

  return matrix;
};

module.exports = rotateMatrix;
