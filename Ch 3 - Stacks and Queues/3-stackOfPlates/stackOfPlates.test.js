const StackOfPlates = require('./stackOfPlates');
const StackOfPlatesSol = require('./stackOfPlatesSol');

let stack = new StackOfPlates(3);
let testStack = new StackOfPlatesSol(3);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);

testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);
testStack.push(5);
testStack.push(6);
testStack.push(7);
testStack.push(8);
testStack.push(9);
testStack.push(10);
testStack.push(11);
testStack.push(12);
testStack.push(13);
testStack.push(14);

test('creates a stack of stacks', () => {
  expect(stack).toEqual(testStack);

  expect(stack.peek()).toEqual(testStack.peek());
});

test('pops from stacks as if they were a normal stack', () => {
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();

  testStack.pop();
  testStack.pop();
  testStack.pop();
  testStack.pop();
  testStack.pop();

  expect(stack).toEqual(testStack);

  expect(stack.peek()).toEqual(testStack.peek());
});

test('BONUS popAt works', () => {
  stack.popAt(2);
  stack.popAt(2);
  stack.popAt(2);
  testStack.popAt(2);
  testStack.popAt(2);
  testStack.popAt(2);

  expect(stack).toEqual(testStack);

  expect(stack.peek()).toEqual(testStack.peek());
});
