function Node(val) {
  this.val = val;
  this.next = null;
}

function llGenerator(values) {
  const head = new Node(values.shift());
  let node = head;
  while(values.length) {
    node.next = new Node(values.shift());
    node = node.next;
  }
  return head;
}

module.exports = llGenerator;