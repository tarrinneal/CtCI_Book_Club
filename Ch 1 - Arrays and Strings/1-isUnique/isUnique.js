//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str) {
  // using additional data structures:
  let holder = {};
  for (let i = 0; i < str.length; i++) {
    if (holder[str[i]]) {
      return false;
    }
    holder[str[i]] = str;
  }
  return true;
}

module.exports = isUnique;
