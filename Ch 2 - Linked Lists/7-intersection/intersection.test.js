const intersection = require('./intersection');
const intersectionSol = require('./intersectionSol');
const { llGenerator, intersectGenerator, iterateToNode } = require('../llHelpers');



test('successfully returns the intersect node', () => {
  const [ll1, ll2] = intersectGenerator([1, 2, 3, 4, 5, 6]);
  const solution = iterateToNode(ll1, 3);
  expect(intersection(ll1, ll2)).toBe(solution);
});

test('returns false when given two lists with no intersection', () => {
  const ll = llGenerator([1, 2, 3, 3, 2, 1]);
  const ll2 = llGenerator([5, 1, 2]);
  expect(intersection(ll, ll2)).toBe(false);
});


