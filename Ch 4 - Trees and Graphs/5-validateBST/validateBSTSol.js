var BinaryTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var validateBST = function (bt) {
  // traverse the tree depth first, while
  // using a array with stack like behavior to check each node's validity
  // * assume values do not repeat
  var validateRecurse = function (currBt, stackArr) {
    for (var i = 0; i < stackArr.length; i++) {
      if (
        stackArr[i].side === 'left' &&
        currBt.value > stackArr[i].node.value
      ) {
        return false;
      } else if (
        stackArr[i].side === 'right' &&
        currBt.value < stackArr[i].node.value
      ) {
        return false;
      }
    }
    var left =
      currBt.left === null
        ? true
        : validateRecurse(
            currBt.left,
            stackArr.concat([{ node: currBt, side: 'left' }])
          );
    var right =
      currBt.right === null
        ? true
        : validateRecurse(
            currBt.right,
            stackArr.concat([{ node: currBt, side: 'right' }])
          );
    return true && left && right;
  };
  return validateRecurse(bt, []);
};

module.exports = validateBST;
