//Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?

function rotateMatrix(matrix) {
  let newMatrix = [];
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (newMatrix[j] === undefined) {
        newMatrix[j] = [];
      }
      newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }
  return newMatrix;
}

module.exports = rotateMatrix;
