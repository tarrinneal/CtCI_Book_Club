/*
Design an algorithm and write code to find the first common ancestor
of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
necessarily a binary search tree.
*/

var BinaryTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
};

BinaryTree.prototype.isAncestor = function (node2) {
  //you can write this one too
};

var firstCommonAncestor = function (node1, node2) {
  //you know what to do
};

module.exports = firstCommonAncestor;
