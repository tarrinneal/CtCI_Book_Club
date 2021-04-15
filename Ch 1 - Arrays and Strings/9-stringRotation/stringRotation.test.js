const stringRotation = require('./stringRotation');
const stringRotationSol = require('./stringRotationSol');

test('succesfully finds rotated strings', () => {
  expect(stringRotation('waterbottle', 'erbottlewat')).toBe(
    stringRotationSol('waterbottle', 'erbottlewat')
  );
  expect(stringRotation('aaata', 'aataa')).toBe(
    stringRotationSol('aaata', 'aataa')
  );
});

test('succesfully finds non-rotated strings', () => {
  expect(stringRotation('waterbottle', 'erbotlewatt')).toBe(
    stringRotationSol('waterbottle', 'erbotlewatt')
  );
  expect(stringRotation('bananas are yummy', 'I hope you agree')).toBe(
    stringRotationSol('bananas are yummy', 'I hope you agree')
  );
});
