const { sumLists, sumLists2 } = require('./sumLists');
const sumListsSol = require('./sumListsSol');
const { llGenerator } = require('../llHelpers');



test('successfully sums two linked lists with no digits carried', () => {
  const ll = llGenerator([1, 1, 2]);
  const ll2 = llGenerator([1, 2, 1]);
  const solution = llGenerator([2, 3, 3]);
  const result = sumLists(ll, ll2);
  expect(result).toEqual(solution)
});

test('successfully sums two linked lists with digits carried', () => {
  const ll = llGenerator([7, 1, 6]);
  const ll2 = llGenerator([5, 9, 2]);
  const solution = llGenerator([2, 1, 9]);
  const result = sumLists(ll, ll2);
  expect(result).toEqual(solution);
});

test('successfully sums two linked lists with a carry digit greater than 1', () => {
  const ll = llGenerator([9, 9, 1]);
  const ll2 = llGenerator([9, 5, 1]);
  const solution = llGenerator([8, 5, 3]);
  const result = sumLists(ll, ll2);
  expect(result).toEqual(solution);
});

test('successfully sums two linked lists that need a new digit', () => {
  const ll = llGenerator([1, 2, 9]);
  const ll2 = llGenerator([3, 4, 7]);
  const solution = llGenerator([4, 6, 6, 1]);
  const result = sumLists(ll, ll2);
  expect(result).toEqual(solution);
});

test('successfully sums two linked lists of different lengths', () => {
  const ll = llGenerator([1, 1, 1]);
  const ll2 = llGenerator([1, 1, 1, 1]);
  const solution = llGenerator([2, 2, 2, 1]);
  const result = sumLists(ll, ll2);
  expect(result).toEqual(solution);
})

// Uncomment below to test the follow up.

// test('successfully sums two linked lists given in normal order', () => {
//   const ll = llGenerator([6, 1, 7]);
//   const ll2 = llGenerator([2, 9, 5]);
//   const solution = llGenerator([9, 1, 2]);
//   const result = sumLists2(ll, ll2);
//   expect(result).toEqual(solution);
// })