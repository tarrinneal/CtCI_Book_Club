const StackMin = require('./stackMin');
const StackMinSol = require('./stackMinSol');

test('creates a stack that can track the min value at all times', () => {
  let stack = new StackMin();
  let testStack = new StackMinSol();

  stack.push(9);
  stack.push(8);
  stack.push(1);
  stack.push(2);
  stack.push(1);
  stack.push(9);

  testStack.push(9);
  testStack.push(8);
  testStack.push(1);
  testStack.push(2);
  testStack.push(1);
  testStack.push(9);

  expect(stack).toEqual(testStack);

  stack.pop();
  stack.pop();
  testStack.pop();
  testStack.pop();

  expect(stack.peek()).toEqual(testStack.peek());
  expect(stack.min()).toEqual(testStack.min());

  stack.pop();
  stack.pop();
  testStack.pop();
  testStack.pop();

  expect(stack.peek()).toEqual(testStack.peek());
  expect(stack.min()).toEqual(testStack.min());
  stack.pop();
  stack.pop();
  testStack.pop();
  testStack.pop();

  expect(stack.peek()).toEqual(testStack.peek());
  expect(stack.min()).toEqual(testStack.min());
});
