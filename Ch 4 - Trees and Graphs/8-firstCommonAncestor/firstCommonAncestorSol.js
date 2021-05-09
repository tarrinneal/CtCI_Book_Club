var BinaryTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
};

BinaryTree.prototype.isAncestor = function (node2) {
  if (this === node2) {
    return true;
  } else {
    var answer1 = false;
    var answer2 = false;
    if (this.left !== null) {
      answer1 = this.left.isAncestor(node2);
    }
    if (this.right !== null) {
      answer2 = this.right.isAncestor(node2);
    }
    return false || answer1 || answer2;
  }
};

var firstCommonAncestor = function (node1, node2) {
  var currNode = node1;
  while (!currNode.isAncestor(node2)) {
    if (currNode === null) {
      throw Error;
    } else {
      currNode = currNode.parent;
    }
  }
  return currNode.value;
};

module.exports = firstCommonAncestor;
