var Stack = require('./../util/Stack');

// Approach, keep an additional stack that keeps the mins

class StackMin extends Stack {
  constructor() {
    super();
    // additional stack to track the mins
    this._minStack = new Stack();
    this._min = null;
  }

  push(value) {
    super.push(value);
    if (this._min == null || value <= this._min) {
      this._min = value;
      this._minStack.push(value);
    }
  }

  pop() {
    let value = super.pop();
    if (value == this._minStack.peek()) {
      this._minStack.pop();
      this._min = this._minStack.peek();
    }
    return value;
  }

  min() {
    return this._min;
  }
}

module.exports = StackMin;
