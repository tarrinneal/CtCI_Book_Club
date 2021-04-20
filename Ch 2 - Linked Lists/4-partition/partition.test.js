const partition = require('./partition');
const partitionSol = require('./partitionSol');
const { llGenerator, iterateToNode, partitioner } = require('../llHelpers');



test('successfully partitions a linked list with a right and a left side', () => {
  const ll = llGenerator([22, 31, 1, 5, 17, 21, 21, 6, 2, 1, 20]);
  const llTest = llGenerator([22, 31, 1, 5, 17, 21, 21, 6, 2, 1, 20]);
  let solution = partitioner(partitionSol(llTest, 20), 6);
  let result = partitioner(partition(ll, 20), 6);
  expect(result).toStrictEqual(solution);
});

test('successfully partitions a linked list with only a right side', () => {
  const ll = llGenerator([22, 31, 21, 21, 20]);
  const llTest = llGenerator([22, 31, 21, 21, 20]);
  const solution = partitioner(partitionSol(ll, 20), 0);
  const result = partitioner(partition(ll, 20), 0);
  expect(result).toStrictEqual(solution);
});

test('successfully partitions a linked list with only a left side', () => {
  const ll = llGenerator([1,5,17,6,2,1]);
  const llTest = llGenerator([1,5,17,6,2,1]);
  const solution = partitioner(partitionSol(llTest, 20), 6);
  const result = partitioner(partition(ll, 20), 6);
  expect(result).toStrictEqual(solution);
});