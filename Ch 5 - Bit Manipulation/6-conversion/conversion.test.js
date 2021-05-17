const conversion = require('./conversion');
const conversionSol = require('./conversionSol');

test('Basic conversion test', () => {
  expect(conversion(29, 15))toBe(2)
});
