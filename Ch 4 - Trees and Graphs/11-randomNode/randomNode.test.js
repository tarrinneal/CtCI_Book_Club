const BinaryTree = require('./randomNode');

var a = new BinaryTree(1);
var b = new BinaryTree(1);
var c = new BinaryTree(1);
var d = new BinaryTree(10);

a.left = b;
a.right = c;
c.left = d;

console.log(a.pathsWithSum(12), 1);
console.log(a.pathsWithSum(2), 2);
console.log(a.pathsWithSum(1), 3);

test('initial tests', () => {
  expect(a.pathsWithSum(12)).toEqual(1);
  expect(a.pathsWithSum(2)).toEqual(2);
  expect(a.pathsWithSum(1)).toEqual(3);
});
