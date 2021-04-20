const checkPermutations = require('./checkPermutations');
const checkPermutationsSol = require('./checkPermutationsSol');

test('Correctly identifies strings that are permutations', () => {
  expect(checkPermutations('aba', 'aab')).toBe(
    checkPermutationsSol('aba', 'aab')
  );
  expect(checkPermutations('carerac', 'racecar')).toBe(
    checkPermutationsSol('carerac', 'racecar')
  );
});

test('Correctly identifies strings that are NOT permutations', () => {
  expect(checkPermutations('aba', 'aaba')).toBe(
    checkPermutationsSol('aba', 'aaba')
  );
  expect(checkPermutations('scooptity', 'whoop')).toBe(
    checkPermutationsSol('scooptity', 'whoop')
  );
});
