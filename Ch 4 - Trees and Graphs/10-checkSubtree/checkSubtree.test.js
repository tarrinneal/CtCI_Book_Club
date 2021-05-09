const Tree = require('./checkSubtree');

var a1 = new Tree(1);
var a2 = new Tree(2);
var a3 = new Tree(3);
var a4 = new Tree(4);
var a5 = new Tree(5);
var a6 = new Tree(6);
var a7 = new Tree(7);

var b3 = new Tree(3);
var b6 = new Tree(6);
var b7 = new Tree(7);

var c3 = new Tree(3);
var c6 = new Tree(6);
var c8 = new Tree(8);

a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;
a3.right = a7;

b3.left = b6;
b3.right = b7;

c3.left = c6;
c3.right = c8;

// console.log(a1.isSubtree(b3), true);
// console.log(a1.isSubtree(c3), false);

test('initial tests', () => {
  expect(a1.isSubtree(b3)).toEqual(true);
  expect(a1.isSubtree(c3)).toEqual(false);
});
