const sortStack = require('./sortStack');
const sortStackSol = require('./sortStackSol');
var Stack = require('./../util/Stack');

test('sorts a stack!', () => {
  let s = new Stack();

  s.push(99);
  s.push(4);
  s.push(1);
  s.push(6);
  s.push(8);
  s.push(10);
  s.push(22);
  s.push(3);
  s.push(72);

  let st = new Stack();

  st.push(99);
  st.push(4);
  st.push(1);
  st.push(6);
  st.push(8);
  st.push(10);
  st.push(22);
  st.push(3);
  st.push(72);

  var sortS = sortStack(s);
  var sortSt = sortStackSol(st);
  // console.log(sortSt);
  while (!sortSt.isEmpty()) {
    expect(sortS.pop()).toEqual(sortSt.pop());
  }
});
