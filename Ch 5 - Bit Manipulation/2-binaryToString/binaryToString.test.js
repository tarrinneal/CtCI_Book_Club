const binaryToString = require('./binaryToString');
const binaryToStringSol = require('./binaryToStringSol');

const N = parseInt(10000000000, 2);
const M = parseInt(10011, 2);

test('Basic binaryToString test', () => {
  expect(binaryToString(0.625)).toBe('0.101');
  expect(binaryToString(0.6255342856783467856932)).toBe('ERROR');
});
