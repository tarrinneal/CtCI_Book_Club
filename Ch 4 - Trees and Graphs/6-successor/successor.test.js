const successor = require('./successor');
const successorSol = require('./successorSol');

var BSTp = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
};

var a = new BSTp(10);
var b = new BSTp(2);
var c = new BSTp(3);
var d = new BSTp(4);
var e = new BSTp(6);
var f = new BSTp(5);
var g = new BSTp(7);

a.left = b;
b.parent = a;
b.right = c;
c.parent = b;
c.right = d;
d.parent = c;
d.right = e;
e.parent = d;
e.left = f;
f.parent = e;
e.right = g;
g.parent = e;

//More tests to be written soon!

test('initial tests', () => {
  expect(successor(f).value).toBe(6);
  expect(successor(g).value).toBe(10);
});
