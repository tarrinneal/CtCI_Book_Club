const oneAway = require('./oneAway');
const oneAwaySol = require('./oneAwaySol');

test('Identifies strings that are one insert away', () => {
  expect(oneAway('pale', 'pales')).toBe(oneAwaySol('pale', 'pales'));
  expect(oneAway('ple', 'pale')).toBe(oneAwaySol('ple', 'pale'));
});

test('Identifies strings that are one removal away', () => {
  expect(oneAway('pale', 'ple')).toBe(oneAwaySol('pale', 'ple'));
  expect(oneAway('banana', 'banna')).toBe(oneAwaySol('banana', 'banna'));
});

test('Identifies strings that are one replace away', () => {
  expect(oneAway('zoinks', 'zoinky')).toBe(oneAwaySol('zoinks', 'zoinky'));
  expect(oneAway('shirts', 'sharts')).toBe(oneAwaySol('shirts', 'sharts'));
});

test('Identifies strings that are NOT one change away', () => {
  expect(oneAway('whoa', 'wow')).toBe(oneAwaySol('whoa', 'wow'));
  expect(oneAway('Dozens', 'donuts')).toBe(oneAwaySol('Dozens', 'donuts'));
});
