const QueueViaStacks = require('./queueViaStacks');
const QueueViaStacksSol = require('./queueViaStacksSol');

let queue = new QueueViaStacks();
let testQueue = new QueueViaStacksSol();

test('Creates a queue from stacks, wow', () => {
  expect(queue).toEqual(testQueue);

  expect(queue.isEmpty()).toEqual(testQueue.isEmpty());

  queue.add('a');
  queue.add('b');
  queue.add('c');
  queue.add('d');
  queue.add('e');

  testQueue.add('a');
  testQueue.add('b');
  testQueue.add('c');
  testQueue.add('d');
  testQueue.add('e');

  queue.remove();
  testQueue.remove();

  expect(queue.peek()).toEqual(testQueue.peek());
});
