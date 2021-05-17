const binaryToString = require('./binaryToString');
const binaryToStringSol = require('./binaryToStringSol');

test('Basic binaryToString test', () => {
  expect(binaryToString(0.625)).toBe('0.101');
  expect(binaryToString(0.6255342856783467856932)).toBe('ERROR');
});
