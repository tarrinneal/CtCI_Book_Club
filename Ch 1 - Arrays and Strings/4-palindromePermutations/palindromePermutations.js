//Given a string, write a function to check if it is a permutations of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A perutation is a rearrangement of letters. The palindromedoes not need to be limited to just dictionary words. You can ignore casing and non-letter characters.

//this works, but has horrible time complexity. Going to do it the book way now

// function palindromePermutations(str) {
//   str = str.toLowerCase();
//   str = str.replace(/\s/g, '');

//   const permutations = [];


//   let findPermutations = (choices, workingPerm = '') => {
//     if (workingPerm.length >= str.length) {
//       permutations.push(workingPerm);
//     } else {
//       for (let i = 0; i < choices.length; i++) {
//         let newPerm = workingPerm + choices[i];
//         let newChoices = choices.slice(0, i) + choices.slice(i + 1, choices.length);
//         findPermutations(newChoices, newPerm);
//       }
//     }
//   }
//   findPermutations(str);


//   permutations.forEach((perm) => {
//     let reversed = perm.split('').reverse().join('');
//     if (reversed === str) {
//       return true;
//     }
//   })

//   for (let i = 0; i < permutations.length; i++) {
//     let reversed = permutations[i].split('').reverse().join('');
//     if (permutations[i] === reversed) {
//       return true;
//     }
//   }

//   return false;
// }

//yeah... this is a lot better

function palindromePermutations(str) {
  str = str.toLowerCase();
  str = str.replace(/\s/g, '');

  let memoizedChars = {}

  str.split('').forEach((char) => {
    if (memoizedChars.hasOwnProperty(char)) {
      memoizedChars[char]++;
    } else {
      memoizedChars[char] = 1;
    }
  })

  let oneOdd = false;

  for (let char in memoizedChars) {
    if (memoizedChars[char] % 2 === 1) {
      if (oneOdd) {
        return false;
      }
      oneOdd = true;
    }
  }

  return true;


}

module.exports = palindromePermutations;
