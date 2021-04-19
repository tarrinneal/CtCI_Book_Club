//Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure that mimics this. It should be composed of several stacks and should create a new stack once the previous one exceeds capacity. push and pop should behave identically to a single stack (that is, pop should return the same values as it would if there were just a single stack).

//BONUS implement a function popAt which performs a pop operation on a specific sub-stack.

var Stack = require('./../util/Stack');

class StackOfPlates {
  constructor(capacity) {
    this.capacity = capacity;
    this.stackSet = [];
  }

  getLastStack() {
    //
  }

  push(value) {
    //
  }

  pop() {
    //
  }

  peek() {
    //
  }

  isEmpty() {
    //
  }

  popAt(index) {
    //
  }
}

module.exports = StackOfPlates;
