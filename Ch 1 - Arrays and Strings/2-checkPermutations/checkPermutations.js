//Given two strings, write a method to decide if one is a permutation of the other.

const checkPermutations = (str1, str2) => {
  let ordered1 = str1.split('').sort().join();
  let ordered2 = str2.split('').sort().join();
  if (ordered1 === ordered2) {
    return true;
  }
  return false;
};

module.exports = checkPermutations;
