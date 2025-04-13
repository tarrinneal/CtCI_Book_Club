const palindromePermutations = require('./palindromePermutations');
const palindromePermutationsSol = require('./palindromePermutationsSol');

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
