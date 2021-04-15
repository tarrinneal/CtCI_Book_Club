const checkPermutations = require('./checkPermutations');
const checkPermutationsSol = require('./checkPermutationsSol');

// console.log('Input | Correct Answer | Your Answer');

// console.log(
//   "('aba', 'aab')",
//   checkPermutationsSol('aba', 'aab'),
//   checkPermutations('aba', 'aab')
// );
// console.log(
//   "('aba', 'aaba')",
//   checkPermutationsSol('aba', 'aaba'),
//   checkPermutations('aba', 'aaba')
// );
// console.log(
//   "('aba', 'aa')",
//   checkPermutationsSol('aba', 'aa'),
//   checkPermutations('aba', 'aa')
// );
// console.log(
//   "('racecar', 'carerac')",
//   checkPermutationsSol('racecar', 'carerac'),
//   checkPermutations('racecar', 'carerac')
// );
// console.log(
//   "('scooptity', 'whoop')",
//   checkPermutationsSol('scooptity', 'whoop'),
//   checkPermutations('scooptity', 'whoop')
// );

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
