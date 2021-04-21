// Given a binary tree in which each node contains an integer value (which might be positive or negative). Design an algorithm to count the number of paths that sum to a given value. The path does not need to start or end at the root or a leaf but it must go downwards (traveling only from parent nodes to child nodes)


/*
Definition of a BT node
var BT = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};
example
           5
         /   \
        3     7
       / \   / \
      2   4 6   8
     /           \
    1             10
sum = 6
output = 2
paths = [3, 2, 1], [6]
*/

var pathsWithSumSol = function (root, sum) {
  let count = 0;
  function dfs (node, parents, current) {
    // check current against sum and increment count
    if (current === sum) count++;
    // copy current for subtracting
    let temp = current;
    // iterate over parents starting at root subtracting each parent and checking if any sub paths equal sum
    for (const parent of parents) {
      temp -= parent;
      if (temp === sum) {
        count++;
      }
    }
    if (node.left) dfs(node.left, [...parents, node.value], current + node.left.value);
    if (node.right) dfs(node.right, [...parents, node.value], current + node.right.value);
  }
  dfs(root, [], root.value)
  return count;
};

module.exports = pathsWithSumSol;
