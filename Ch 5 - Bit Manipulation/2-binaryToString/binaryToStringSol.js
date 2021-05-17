var binaryToString = function (number) {
  var n = 1;
  var str = '0.';
  while (n <= 32 && number > 0) {
    if (number >= Math.pow(2, -n)) {
      number -= Math.pow(2, -n);
      str += '1';
    } else {
      str += '0';
    }
    n++;
  }
  if (n === 33 && number > 0) {
    return 'ERROR';
  } else {
    return str;
  }
};
module.exports = binaryToString;
