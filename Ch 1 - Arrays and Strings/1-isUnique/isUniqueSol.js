var isUniqueEC = function (string) {
  // O(n^2) approach, no additional data structures used
  // for each character, check remaining characters for duplicates
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true;
};

const isUnique = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      return false;
    } else {
      obj[str[i]] = 1;
    }
  }
  return true;
};

module.exports = isUnique;
