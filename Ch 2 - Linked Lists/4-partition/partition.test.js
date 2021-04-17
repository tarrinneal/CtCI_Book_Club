const partition = require('./partition');
const partitionSol = require('./partitionSol');
const { llGenerator, iterateToNode, partitioner } = require('../llHelpers');



test('successfully partitions a linked list with a right and a left side', () => {
  let ll = llGenerator([22, 31, 1, 5, 17, 21, 21, 6, 2, 1, 20]);
  let solution = partitioner(partitionSol(ll, 20), 6);
  let test = partitioner(partition(ll, 20), 6);
  expect(solution).toStrictEqual(test);
});

test('successfully partitions a linked list with only a right side', () => {
  let ll = llGenerator([22, 31, 21, 21, 20])
  let solution = partitioner(partitionSol(ll, 20), 0);
  let test = partitioner(partition(ll, 20), 0);
  expect(solution).toStrictEqual(test);
});

test('successfully partitions a linked list with only a left side', () => {
  let ll = llGenerator([1,5,17,6,2,1])
  let solution = partitioner(partitionSol(ll, 20), 6);
  let test = partitioner(partition(ll, 20), 6);
  expect(solution).toStrictEqual(test);
});