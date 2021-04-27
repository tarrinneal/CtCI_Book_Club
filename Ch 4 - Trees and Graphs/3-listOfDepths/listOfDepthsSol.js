var BST = require('./../util/BST');
var LinkedList = require('./../util/LinkedList');
var Queue = require('./../util/Queue');

var listOfDepths = function (bst) {
  var listOfLists = [];
  var list = null;
  var newNode;
  var q = new Queue();
  var nextq = new Queue();
  var currNode = bst;

  q.add(currNode);
  while (!q.isEmpty()) {
    currNode = q.remove();
    newNode = new LinkedList(currNode.value);
    newNode.next = list;
    list = newNode;
    if (currNode.left !== null) {
      nextq.add(currNode.left);
    }
    if (currNode.right !== null) {
      nextq.add(currNode.right);
    }
    if (q.isEmpty()) {
      listOfLists.push(list);
      list = null;
      q = nextq;
      nextq = new Queue();
    }
  }
  return listOfLists;
};

module.exports = listOfDepths;
