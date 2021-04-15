const palindromePermutations = require('./palindromePermutations');
const palindromePermutationsSol = require('./palindromePermutationsSol');

// console.log('Input | Correct Answer | Your Answer');
// console.log(
//   'Tact Coa',
//   palindromePermutationsSol('Tact Coa'),
//   palindromePermutations('Tact Coa')
// );
// console.log(
//   'Tact boa',
//   palindromePermutationsSol('Tact boa'),
//   palindromePermutations('Tact boa')
// );
// console.log(
//   'Race Car',
//   palindromePermutationsSol('Race Car'),
//   palindromePermutations('Race Car')
// );
// console.log(
//   'boopty scoopty woop',
//   palindromePermutationsSol('boopty scoopty woop'),
//   palindromePermutations('boopty scoopty woop')
// );

test('Correctly identifies strings that are permutations of palindromes', () => {
  expect(palindromePermutations('Tact Coa')).toBe(
    palindromePermutationsSol('Tact Coa')
  );
  expect(palindromePermutations('Race Car')).toBe(
    palindromePermutationsSol('Race Car')
  );
});

test('Correctly identifies strings that are NOT permutations of palindromes', () => {
  expect(palindromePermutations('Tact boa')).toBe(
    palindromePermutationsSol('Tact boa')
  );
  expect(palindromePermutations('boopty scoopty woop')).toBe(
    palindromePermutationsSol('boopty scoopty woop')
  );
});
