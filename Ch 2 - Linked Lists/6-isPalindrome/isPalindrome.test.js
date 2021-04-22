const isPalindrome = require('./isPalindrome');
const isPalindromeSol = require('./isPalindromeSol');
const { llGenerator } = require('../llHelpers');



test('returns false for non palindromes', () => {
  const ll = llGenerator([1, 2, 3, 4, 5, 6])
  expect(isPalindrome(ll)).toBe(false);
});

test('returns true for even length palindromes', () => {
  const ll = llGenerator([1, 2, 3, 3, 2, 1])
  expect(isPalindrome(ll)).toBe(true);
});

test('returns true for odd length palindromes', () => {
  const ll = llGenerator([1, 2, 3, 2, 1])
  expect(isPalindrome(ll)).toBe(true);
});

