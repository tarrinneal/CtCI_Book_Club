const isUnique = require('./isUnique');
const isUniqueSol = require('./isUniqueSol');

test('succesfully finds unique strings', () => {
  expect(isUnique('abcd')).toBe(isUniqueSol('abcd'));
  expect(isUnique('uneak')).toBe(isUniqueSol('uneak'));
});

test('succesfully finds non-unique strings', () => {
  expect(isUnique('Hello')).toBe(isUniqueSol('Hello'));
  expect(isUnique('notUnique')).toBe(isUniqueSol('notUnique'));
});
