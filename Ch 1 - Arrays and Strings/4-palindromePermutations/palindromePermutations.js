//Given a string, write a function to check if it is a permutations of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A perutation is a rearrangement of letters. The palindromedoes not need to be limited to just dictionary words. You can ignore casing and non-letter characters.

function palindromePermutations(str) {
  const letters = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    e: 'e',
    f: 'f',
    g: 'g',
    h: 'h',
    i: 'i',
    j: 'j',
    k: 'k',
    l: 'l',
    m: 'm',
    n: 'n',
    o: 'o',
    p: 'p',
    q: 'q',
    r: 'r',
    s: 's',
    t: 't',
    u: 'u',
    v: 'v',
    w: 'w',
    x: 'x',
    y: 'y',
    z: 'z',
  };
  let hasOdd = false;
  let holder = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (!letters[char]) {
      continue;
    }
    if (holder[char]) {
      holder[char] += 1;
    } else {
      holder[char] = 1;
    }
  }
  for (let key in holder) {
    if (holder[key] % 2 === 1 && hasOdd) {
      return false;
    }
    if (holder[key] % 2 === 1) {
      hasOdd = true;
    }
  }
  return true;
}

// console.log(palindromePermutations('Tact Coa'));

module.exports = palindromePermutations;
