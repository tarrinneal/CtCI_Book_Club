//Given two strings, write a method to decide if one is a permutation of the other.

const checkPermutations = (str1, str2) => {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
};

module.exports = checkPermutations;
