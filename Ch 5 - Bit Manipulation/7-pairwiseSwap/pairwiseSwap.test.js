const pairwiseSwap = require('./pairwiseSwap');
const pairwiseSwapSol = require('./pairwiseSwapSol');

test('Basic pairwiseSwap test', () => {
  expect(pairwiseSwap(4))toBe(pairwiseSwapSol(4))
});
