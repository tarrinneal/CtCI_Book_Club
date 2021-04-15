const removeDups = require('./removeDups');
const removeDupsSol = require('./removeDupsSol');
const llGenerator = require('../llGenerator');

const noDupsLL = llGenerator([1, 5, 2, 3, 11, 7]);
const noDupsLL2 = llGenerator([400, 22, 390, 1, 57])
const consecDupsLL = llGenerator([1, 1, 1, 4, 2, 3, 3, 15, 17]);
const consecDupsLL2 = llGenerator([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3])
const nonConsecDupsLL = llGenerator([2, 5, 2, 13, 7, 8, 4, 13, 4, 5, 4]);
const nonConsecDupsLL2 = llGenerator([45, 29, 78, 45, 2, 3, 99, 3, 21])

test('does not modify a linked list with no dups', () => {
  expect(removeDups(noDupsLL)).toBe(noDupsLL);
  expect(removeDups(noDupsLL2)).toBe(noDupsLL2);
});

test('removes consecutive duplicates in a linked list', () => {
  expect(removeDups(consecDupsLL)).toBe(removeDupsSol(consecDupsLL));
  expect(removeDups(consecDupsLL2)).toBe(removeDupsSol(consecDupsLL2));
});

test('removes non consecutive duplicates from a linked list', () => {
  expect(removeDups(nonConsecDupsLL)).toBe(removeDupsSol(nonConsecDupsLL));
  expect(removeDups(nonConsecDupsLL2)).toBe(removeDupsSol(nonConsecDupsLL2));
})