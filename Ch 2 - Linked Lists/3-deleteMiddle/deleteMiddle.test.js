const deleteMiddle = require('./deleteMiddle');
const deleteMiddleSol = require('./deleteMiddleSol');
const { llGenerator, iterateToNode } = require('../llHelpers');



test('successfully deletes a node from a linked list', () => {
  let ll = llGenerator([1,2,3,4,5])
  let testNode = iterateToNode(ll, 3);
  let solution = llGenerator([1, 2, 4, 5])
  deleteMiddle(testNode);
  expect(ll).toStrictEqual(solution);
});
