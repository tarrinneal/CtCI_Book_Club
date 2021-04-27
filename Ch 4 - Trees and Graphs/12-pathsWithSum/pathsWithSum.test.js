const pathsWithSum = require('./pathsWithSum');
const pathsWithSumSol = require('./pathsWithSumSol');
const BST = require('../util/BST');

const positiveTree = new BST(5);
positiveTree.insert(3);
positiveTree.insert(7);
positiveTree.insert(2);
positiveTree.insert(4);
positiveTree.insert(1);
positiveTree.insert(6);
positiveTree.insert(8);
positiveTree.insert(10);

test('counts all paths in an all positive binary tree', () => {
  const result = pathsWithSum(positiveTree, 6);
  expect(result).toBe(2);
});

const mixedTree = new BST(5);
mixedTree.left = new BST(-3);
mixedTree.left.left = new BST(-2);
mixedTree.left.left.left = new BST(5);
mixedTree.right = new BST(7);
mixedTree.right.left = new BST(-7);
mixedTree.right.right = new BST(8);
mixedTree.right.right.right = new BST(10);

test('counts all paths in a mixed binary tree', () => {
  expect(pathsWithSum(mixedTree, 5)).toBe(4);
});

test('counts all paths in a mixed binary tree with a negative sum', () => {
  expect(pathsWithSum(mixedTree, -3)).toBe(1);
});

test('returns 0 for a binary tree with no paths to a sum', () => {
  expect(pathsWithSum(mixedTree, 200)).toBe(0);
})
