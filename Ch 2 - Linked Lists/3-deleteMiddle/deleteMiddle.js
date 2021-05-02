// Given only a single node of a linked list, remove that node and only that node from the list. Don't return anything, just modify the input.

/*
Example:
LL = [1,2,3,4,5]
input node = 3
LL = [1, 2, 4, 5]
*/

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

const deleteMiddle = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};

module.exports = deleteMiddle;
