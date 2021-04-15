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
  expect(checkPermutations('Tact Coa')).toBe(checkPermutationsSol('Tact Coa'));
  expect(checkPermutations('Race Car')).toBe(checkPermutationsSol('Race Car'));
});

test('Correctly identifies strings that are NOT permutations of palindromes', () => {
  expect(checkPermutations('Tact boa')).toBe(checkPermutationsSol('Tact boa'));
  expect(checkPermutations('boopty scoopty woop')).toBe(
    checkPermutationsSol('boopty scoopty woop')
  );
});
