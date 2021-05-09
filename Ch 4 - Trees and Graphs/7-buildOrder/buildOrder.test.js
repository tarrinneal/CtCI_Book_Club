const buildOrder = require('./buildOrder');
const buildOrderSol = require('./buildOrderSol');

var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencies = [
  ['a', 'd'],
  ['f', 'b'],
  ['b', 'd'],
  ['f', 'a'],
  ['d', 'c'],
];

//More tests to be written soon!

test('initial tests', () => {
  expect(buildOrder(projects, dependencies)).toEqual([f, e, a, b, d, c]);
});
