const kthToLast = require('./kthToLast');
const kthToLastSol = require('./kthToLastSol');
const llGenerator = require('../llGenerator');

const ll = llGenerator([1,2,3,4,5])

test('returns the appropriate node for k values in range', () => {
  // 3rd to last node would be 3
  expect(kthToLast(ll, 3)).toBe(kthToLastSol(ll, 3));
  // 2nd to last node would be 4
  expect(kthToLast(ll, 2)).toBe(kthToLastSol(ll, 2));
});

test('returns the last element for a k value of 1', () => {
  expect(kthToLast(ll, 1)).toBe(kthToLastSol(ll, 1));
});

test('returns null for k values out of range or linked lists that are null', () => {
  expect(kthToLast(ll, 0)).toBe(null);
  expect(kthToLast(ll, 20)).toBe(null);
  expect(kthToLast(null, 3)).toBe(null);
})