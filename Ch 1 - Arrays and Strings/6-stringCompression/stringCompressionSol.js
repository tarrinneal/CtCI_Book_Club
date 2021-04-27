function stringCompression(str) {
  let result = '';
  let count = 1;
  let cur = str[0];
  for (let i = 1; i < str.length; i++) {
    if (cur === str[i]) {
      count++;
    } else {
      result = result + cur + count;
      cur = str[i];
      count = 1;
    }
  }

  result = result + cur + count;

  return result.length < str.length ? result : str;
}

module.exports = stringCompression;
