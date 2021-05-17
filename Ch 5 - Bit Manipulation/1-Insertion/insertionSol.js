const insertion = (N, M, i, j) => {
  const bitMask = (-1 << (j + 1)) | ((1 << i) - 1);
  const clearedN = N & bitMask;
  const shiftedM = M << i;
  return clearedN | shiftedM;
};
module.exports = insertion;
