const checkBalanced = require('./checkBalanced');
const checkBalancedSol = require('./checkBalancedSol');
var BST = require('./../util/BST');

var b1 = new BST(1);
b1.insert(2);
b1.insert(3);
b1.insert(4);
console.log(checkBalanced(b1), false);

var b2 = new BST(4);
b2.insert(2);
b2.insert(6);
b2.insert(1);
b2.insert(3);
b2.insert(5);
b2.insert(7);
console.log(checkBalanced(b2), true);

//Tests to be written soon!

test('creates linked list of depth of tree', () => {
  expect(checkBalanced(tree)).toBe(checkBalancedSol(tree));
  expect(checkBalanced(tree2)).toBe(checkBalancedSol(tree2));
});
