/*
You are implementing a binary tree class from scratch which, in addition to
insert, find, and delete, has a method getRandomNode() which returns a random node
from the tree. All nodes should be equally likely to be chosen. Design and implement an algorithm
for getRandomNode, and explain how you would implement the rest of the methods.
*/

/* helper function - sum of an array */
var SumArr = function (arr) {
  return arr.reduce((total, num) => total + num, 0);
};

var BinaryTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.countPathsWithRoot = function (value, path) {
  //methods
};

BinaryTree.prototype.pathsWithSum = function (value) {
  //on methods
};

module.exports = BinaryTree;
