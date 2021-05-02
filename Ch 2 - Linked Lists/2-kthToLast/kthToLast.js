//Given the head of a linked list and an integer, k, return the kth to last node of the linked list. If k = 1 return the last element. If k = 0 or is out of range return null.

/*
Example:
LL = [1,2,3,4,5]
k = 3
return [3,4,5]
*/

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

const kthToLast = (head, k) => {
  if (k < 1) {
    return null;
  }
  let cache = {};
  let node = head;
  let index = 1;
  while (node) {
    cache[index] = node;
    index++;
    node = node.next;
  }
  return cache[index - k] ? cache[index - k] : null;
};

module.exports = kthToLast;
