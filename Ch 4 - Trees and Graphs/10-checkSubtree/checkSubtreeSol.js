var Tree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var isSame = function (tree1, tree2) {
  var answer = tree1.value === tree2.value;
  if (!answer) {
    return answer;
  }

  if (tree1.left !== null && tree2.left !== null) {
    answer = answer && isSame(tree1.left, tree2.left);
  } else if (
    (tree1.left === null && tree2.left !== null) ||
    (tree1.left !== null && tree2.left === null)
  ) {
    answer = answer && false;
  }

  if (tree1.right !== null && tree2.right !== null) {
    answer = answer && isSame(tree1.right, tree2.right);
  } else if (
    (tree1.right === null && tree2.right !== null) ||
    (tree1.right !== null && tree2.right === null)
  ) {
    answer = answer && false;
  }

  return answer;
};

Tree.prototype.isSubtree = function (tree2) {
  if (isSame(this, tree2)) {
    return true;
  } else {
    var answer = false;
    if (this.left !== null) {
      answer = answer || this.left.isSubtree(tree2);
    }
    if (this.right !== null) {
      answer = answer || this.right.isSubtree(tree2);
    }
    return answer;
  }
};

module.exports = Tree;
