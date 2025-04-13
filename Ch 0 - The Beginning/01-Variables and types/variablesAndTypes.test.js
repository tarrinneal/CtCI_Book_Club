const variables = require('./variablesAndTypes');
const variablesSol = require('./variablesAndTypesSol');

test('returns 0', () => {
  expect(variables()).toBe(variablesSol());
});
