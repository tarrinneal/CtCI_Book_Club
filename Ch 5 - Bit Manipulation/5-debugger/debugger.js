/*
Explain what the following code does: ( ( n & ( n-1)) == 0).
*/

var mysteriousFunction = function (n) {
  return (n & (n - 1)) === 0;
};

module.exports = mysteriousFunction;
