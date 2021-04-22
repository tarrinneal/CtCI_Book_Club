// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. (IMPORTANT: the partition element can appear anywhere in the "right partition" it does not have to appear between the left and the right partitions.)  The nodes within each partition do not have to be in any particular order. The space below indicates the partition point but doesn't have to be denoted in any way in the linked list. Inputs head of a linked list and value, x

/*
Example:
LL = [22, 31, 1, 5, 17, 21, 21, 6, 2, 1, 20]
input node = 20       partition
                        VVVV
LL = [1, 1, 6, 5, 2, 17,     21, 22, 31, 20, 21]
*/

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

function Node(val) {
  this.val = val;
  this.next = null;
}

const partitionSol = (head, x) => {
  let lessThan = [];
  let greaterThan = [];
  let node = head;
  while (node) {
    if (node.val < x) {
      lessThan.push(node.val);
    } else {
      greaterThan.push(node.val);
    }
    node = node.next;
  }
  let newHead;
  if (lessThan.length) {
    newHead = new Node(lessThan.pop());
  } else if (greaterThan.length) {
    newHead = new Node(greaterThan.pop());
  } else {
    return null;
  }
  let prev = newHead;
  while(lessThan.length) {
    let current = new Node(lessThan.pop());
    if (prev) prev.next = current;
    prev = current;
  }
  while(greaterThan.length) {
    let current = new Node(greaterThan.pop());
    if (prev) prev.next = current;
    prev = current;
  }
  prev.next = null;
  return newHead;
};

module.exports = partitionSol;
