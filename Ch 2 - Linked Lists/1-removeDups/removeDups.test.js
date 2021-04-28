const removeDups = require('./removeDups');
const removeDupsSol = require('./removeDupsSol');
const { llGenerator } = require('../llHelpers');

const noDupsLL = llGenerator([1, 5, 2, 3, 11, 7]);
const noDupsLLTest = llGenerator([1, 5, 2, 3, 11, 7]);

const noDupsLL2 = llGenerator([400, 22, 390, 1, 57]);
const noDupsLL2Test = llGenerator([400, 22, 390, 1, 57]);

const consecDupsLL = llGenerator([1, 1, 1, 4, 2, 3, 3, 15, 17]);
const consecDupsLLTest = llGenerator([1, 1, 1, 4, 2, 3, 3, 15, 17]);

const consecDupsLL2 = llGenerator([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]);
const consecDupsLL2Test = llGenerator([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]);

const nonConsecDupsLL = llGenerator([2, 5, 2, 13, 7, 8, 4, 13, 4, 5, 4]);
const nonConsecDupsLLTest = llGenerator([2, 5, 2, 13, 7, 8, 4, 13, 4, 5, 4]);

const nonConsecDupsLL2 = llGenerator([45, 29, 78, 45, 2, 3, 99, 3, 21]);
const nonConsecDupsLL2Test = llGenerator([45, 29, 78, 45, 2, 3, 99, 3, 21]);


test('does not modify a linked list with no dups', () => {
  expect(removeDups(noDupsLL)).toStrictEqual(noDupsLLTest);
  expect(removeDups(noDupsLL2)).toStrictEqual(noDupsLL2Test);
});

test('removes consecutive duplicates in a linked list', () => {
  expect(removeDups(consecDupsLL)).toStrictEqual(removeDupsSol(consecDupsLLTest));
  expect(removeDups(consecDupsLL2)).toStrictEqual(removeDupsSol(consecDupsLL2Test));
});

test('removes non consecutive duplicates from a linked list', () => {
  expect(removeDups(nonConsecDupsLL)).toStrictEqual(removeDupsSol(nonConsecDupsLLTest));
  expect(removeDups(nonConsecDupsLL2)).toStrictEqual(removeDupsSol(nonConsecDupsLL2Test));
});