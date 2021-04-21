const minimalTree = require('./minimalTree');
const minimalTreeSol = require('./minimalTreeSol');

// Approach: divide and conquer, array and insert into tree

test('Creates binary tree from sorted array', () => {
  expect(minimalTree([1, 2, 3, 4, 5, 6])).toBe(
    minimalTreeSol([1, 2, 3, 4, 5, 6])
  );
  expect(minimalTree([1, 2, 3, 4, 5, 6, 7])).toBe(
    minimalTreeSol([1, 2, 3, 4, 5, 6, 7])
  );
});
