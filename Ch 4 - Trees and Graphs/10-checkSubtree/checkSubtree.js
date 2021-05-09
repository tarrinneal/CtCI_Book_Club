/*
Tl and T2 are two very large binary trees, with Tl much bigger than T2. Create an
algorithm to determine if T2 is a subtree of Tl.
A tree T2 is a subtree of Tl if there exists a node n in Tl such that the subtree
of n is identical to T2.
That is, if you cut off the tree at node n, the two trees would be identical.
*/

var Tree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var isSame = function (tree1, tree2) {
  //helper function
};

Tree.prototype.isSubtree = function (tree2) {
  //main method
};

module.exports = Tree;
