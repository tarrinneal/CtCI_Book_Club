const stringCompression = require('./stringCompression');
const stringCompressionSol = require('./stringCompressionSol');

test('Compresses strings down when shorter than original', () => {
  expect(stringCompression('aaaaaa')).toBe(stringCompressionSol('aaaaaa'));
  expect(stringCompression('abbcccddddeeeee')).toBe(
    stringCompressionSol('abbcccddddeeeee')
  );
  expect(stringCompression('HowdyDoodyDoodlydoooooo')).toBe(
    stringCompressionSol('HowdyDoodyDoodlydoooooo')
  );
});

test('returns original string if compression is not shorter', () => {
  expect(stringCompression('hahahahaha')).toBe(
    stringCompressionSol('hahahahaha')
  );
  expect(stringCompression('Bananassaregood')).toBe(
    stringCompressionSol('Bananassaregood')
  );
});
