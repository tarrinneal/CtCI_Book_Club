const bstSequences = require('./bstSequences');
const bstSequencesSol = require('./bstSequencesSol');

var BST = require('./../util/BST');

/* 1, 2, 3, 4, 5, 6, 7 */

var b = new BST(4);
b.insert(2);
b.insert(6);
b.insert(1);
b.insert(3);
b.insert(5);
b.insert(7);

console.log(bstSequences(b));

//this test may fail if your arrays print in a different order.

test('initial tests', () => {
  expect(bstSequences(b)).toEqual(bstSequencesSol(b));
});
