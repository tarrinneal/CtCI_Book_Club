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

function iterateToNode(head, index) {
  let count = 0;
  let node = head;
  while (node) {
    count++;
    if (count === index) return node;
    node = node.next;
  }
  return null;
}

module.exports = {iterateToNode, llGenerator};