const loopDetection = require('./loopDetection');
const loopDetectionSol = require('./loopDetectionSol');
const { llGenerator, Node} = require('../llHelpers');

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
a.next = b;
b.next = c;
c.next = d;
d.next = b;


test('successfully returns the loop entrance node', () => {
  expect(loopDetection(a)).toBe(b);
});

test('returns false when given a list with no loop', () => {
  const ll = llGenerator([1, 2, 3, 3, 2, 1]);
  expect(loopDetection(ll)).toBe(false);
});


