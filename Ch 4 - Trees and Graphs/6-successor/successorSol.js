var BSTp = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
};

var findSuccessor = function (node) {
  var successor = null;
  if (node.right !== null) {
    successor = node.right;
    while (successor.left !== null) {
      successor = successor.left;
    }
  } else if (node.parent !== null) {
    var currNode = node;
    while (currNode.parent !== null && successor === null) {
      if (currNode.parent.left === currNode) {
        successor = currNode.parent;
      }
      currNode = currNode.parent;
    }
  }
  return successor;
};

module.exports = findSuccessor;
