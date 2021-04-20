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

function partitioner(head, count) {
  let result = {
    left: [],
    right: [],
  }
  let index = 0;
  let node = head;
  while (node) {
    if (index < count) {
      result.left.push(node.val);
    } else {
      result.right.push(node.val);
    }
    node = node.next;
    index++;
  };
  result.left.sort((a, b) => {
    return a - b;
  });
  result.right.sort((a, b) => {
    return a - b;
  });
  return result;
}

function intersectGenerator(arr) {
  const list = llGenerator(arr);
  const list2 = llGenerator([1, 2, 3]);
  let node = list2;
  while (node.next) {
    node = node.next;
  }
  node.next = iterateToNode(list, 3);
  return [list, list2]
}

module.exports = {iterateToNode, llGenerator, partitioner};