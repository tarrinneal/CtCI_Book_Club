const listOfDepths = require('./listOfDepths');
const listOfDepthsSol = require('./listOfDepthsSol');
var BST = require('./../util/BST');
var LinkedList = require('./../util/LinkedList');
var Queue = require('./../util/Queue');

var tree = new BST(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

var tree2 = new BST(5);
tree2.insert(7);
tree2.insert(9);
tree2.insert(0);
tree2.insert(2);
tree2.insert(5);
tree2.insert(8);
tree2.insert(7);
tree2.insert(9);
tree2.insert(0);
tree2.insert(2);
tree2.insert(5);
tree2.insert(8);

console.log(tree2);

test('creates linked list of depth of tree', () => {
  expect(listOfDepths(tree)).toBe(listOfDepthsSol(tree));
  expect(listOfDepths(tree2)).toBe(listOfDepthsSol(tree2));
});
