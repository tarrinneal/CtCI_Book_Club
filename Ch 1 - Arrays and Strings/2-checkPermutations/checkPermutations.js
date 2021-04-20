//Given two strings, write a method to decide if one is a permutation of the other.

const checkPermutations = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let tracker1 = {};
  let tracker2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (tracker1[str1[i]]) {
      tracker1[str1[i]] += 1;
    } else {
      tracker1[str1[i]] = 1;
    }
    if (tracker2[str2[i]]) {
      tracker2[str2[i]] += 1;
    } else {
      tracker2[str2[i]] = 1;
    }
  }
  for (let key in tracker1) {
    if (tracker1[key] !== tracker2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = checkPermutations;
