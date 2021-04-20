const ThreeInOne = require('./threeInOne');
const ThreeInOneSol = require('./threeInOneSol');

var t = new ThreeInOne();
t.push1('1a');
t.push1('1b');
t.push1('1c');
t.push2('2a');
t.push2('2b');
t.push2('2c');
t.push3('3a');
t.push3('3b');
t.push3('3c');

var a1 = t.pop1();
var a2 = t.pop2();
var a3 = t.pop3();

var peek1 = t.peek1();
var peek2 = t.peek2();
var peek3 = t.peek3();

var b1 = t.pop1();
var b2 = t.pop2();
var b3 = t.pop3();

var isEmptya1 = t.isEmpty1();
var isEmptya2 = t.isEmpty2();
var isEmptya3 = t.isEmpty3();

var c1 = t.pop1();
var c2 = t.pop2();
var c3 = t.pop3();

var d1 = t.pop1();
var d2 = t.pop2();
var d3 = t.pop3();

var isEmptyb1 = t.isEmpty1();
var isEmptyb2 = t.isEmpty2();
var isEmptyb3 = t.isEmpty3();

var t2 = new ThreeInOneSol();
t2.push1('1a');
t2.push1('1b');
t2.push1('1c');
t2.push2('2a');
t2.push2('2b');
t2.push2('2c');
t2.push3('3a');
t2.push3('3b');
t2.push3('3c');

var a12 = t2.pop1();
var a22 = t2.pop2();
var a32 = t2.pop3();

var peek12 = t2.peek1();
var peek22 = t2.peek2();
var peek32 = t2.peek3();

var b12 = t2.pop1();
var b22 = t2.pop2();
var b32 = t2.pop3();

var isEmptya12 = t2.isEmpty1();
var isEmptya22 = t2.isEmpty2();
var isEmptya32 = t2.isEmpty3();

var c12 = t2.pop1();
var c22 = t2.pop2();
var c32 = t2.pop3();

var d12 = t2.pop1();
var d22 = t2.pop2();
var d32 = t2.pop3();

var isEmptyb12 = t2.isEmpty1();
var isEmptyb22 = t2.isEmpty2();
var isEmptyb32 = t2.isEmpty3();

test('creates succesful 3 in one stack', () => {
  expect(t2.container).toEqual(t.container);
  expect(a1).toEqual(a12);
  expect(a2).toEqual(a22);
  expect(a3).toEqual(a32);
  expect(peek1).toEqual(peek12);
  expect(peek2).toEqual(peek22);
  expect(peek3).toEqual(peek32);
  expect(b1).toEqual(b12);
  expect(b2).toEqual(b22);
  expect(b3).toEqual(b32);
  expect(isEmptya1).toEqual(isEmptya12);
  expect(isEmptya2).toEqual(isEmptya22);
  expect(isEmptya3).toEqual(isEmptya32);
  expect(c1).toEqual(c12);
  expect(c2).toEqual(c22);
  expect(c3).toEqual(c32);
  expect(d1).toEqual(d12);
  expect(d2).toEqual(d22);
  expect(d3).toEqual(d32);
  expect(isEmptyb1).toEqual(isEmptyb12);
  expect(isEmptyb2).toEqual(isEmptyb22);
  expect(isEmptyb3).toEqual(isEmptyb32);
});
