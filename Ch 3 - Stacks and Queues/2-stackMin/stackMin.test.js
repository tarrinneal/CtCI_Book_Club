const stackMin = require('./stackMin');
const stackMinSol = require('./stackMinSol');

test('creates a stack that can track the min value at all times', () => {
  let stack = new StackMin();
  let testStack = new stackMinSol();

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
});
