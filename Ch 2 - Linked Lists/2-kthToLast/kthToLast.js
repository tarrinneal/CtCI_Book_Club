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
  let node = head;
  //handle edge cases
  if (k < 1) {
    return null;
  }
  //find length
  let length = 0;
  while (node) {
    length++;
    node = node.next;
  }

  let target = (length - k) + 1;
  node = head;
  let currentIndex = 1;
  while (node) {
    if (currentIndex === target) {
      return node;
    }
    node = node.next;
    currentIndex++;
  }
  return null;
};

module.exports = kthToLast;
