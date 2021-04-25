//Given a string, write a function to check if it is a permutations of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters.

function palindromePermutations(str) {
  let mistakes = '';
  let arr = str.toLowerCase().split('').sort();
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] === ' ') {
      i -= 1;
      continue;
    }
    if (i === arr.length - 1) {
      return mistakes.length === 0;
    }
    if (arr[i] !== arr[i + 1]) {
      mistakes += arr[i];
      i -= 1;
    }
    if (mistakes.length > 1) {
      return false;
    }
  }
  return true;
}

module.exports = palindromePermutations;
