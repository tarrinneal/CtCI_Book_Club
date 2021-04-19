// Notes:
// hold the smallest item as a variable, put the rest into the other stack.
// pop back the stack, place the smallest item into the bottom, and repeat.
// when completed, pop back into original stack.

var Stack = require('./../util/Stack');

var sortStack = function (stack) {
  var tempStack = new Stack();
  var currMin = Infinity;
  var stackDepth = 0;

  while (!stack.isEmpty()) {
    if (stack.peek() <= currMin) {
      if (currMin !== Infinity) {
        tempStack.push(currMin);
      }
      currMin = stack.pop();
    } else {
      tempStack.push(stack.pop());
    }
    stackDepth++;
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  tempStack.push(currMin);
  currMin = Infinity;
  stackDepth--;

  while (stackDepth > 0) {
    while (!stack.isEmpty()) {
      if (stack.peek() <= currMin) {
        if (currMin !== Infinity) {
          tempStack.push(currMin);
        }
        currMin = stack.pop();
      } else {
        tempStack.push(stack.pop());
      }
    }

    for (var i = 0; i < stackDepth - 1; i++) {
      stack.push(tempStack.pop());
    }

    tempStack.push(currMin);
    currMin = Infinity;
    stackDepth--;
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  return stack;
};

module.exports = sortStack;
