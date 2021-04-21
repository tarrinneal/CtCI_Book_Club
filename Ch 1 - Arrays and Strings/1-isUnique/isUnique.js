//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str) {
  let verify = new Set();

  for (let i = 0; i < str.length; i++) {
    if (verify.has(str[i])) {
      return false;
    }
    verify.add(str[i]);
  }

  return true;
}

module.exports = isUnique;
