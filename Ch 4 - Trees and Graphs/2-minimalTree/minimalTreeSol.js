var Queue = require('./../util/Queue');
var BST = require('./../util/BST');

var insertBalanced = function (array) {
  var bst = new BST();
  var q = new Queue();
  var currArr;
  var floor = Math.floor;
  q.add(array);
  while (!q.isEmpty()) {
    currArr = q.remove();
    bst.insert(currArr[floor(currArr.length / 2)]);
    if (currArr.slice(0, floor(currArr.length / 2)).length > 0) {
      q.add(currArr.slice(0, floor(currArr.length / 2)));
    }
    if (currArr.slice(floor(currArr.length / 2) + 1).length > 0) {
      q.add(currArr.slice(floor(currArr.length / 2) + 1));
    }
  }
  return bst;
};

module.exports = insertBalanced;
