// You are given two numbers respresented by a linked list, where each node contains a single digit,. the digits are stored in reverse order, such t hat the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. (You are not allowed to "cheat" and just convert the linked list to an integer).

// Follow up suppose the digits are store din forward order. Repeat the same problem. To test go to the sumLists.test.js file and uncomment out the last test.

/*
Example:
ll1 = 7 -> 1 -> 6
ll2 = 5 -> 9 -> 2
617 + 295 = 912
output = 2 -> 1 -> 9

Follow up example:
ll1 = 6 -> 1 -> 7
ll2 = 2 -> 9 -> 5
617 + 295 = 912
output = 9 -> 1 -> 2
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

const sumLists = (list1, list2, remainder = 0, head = null, previous = null) => {
  if (list1 === null && list2 === null && remainder === 0) {
    return head;
  }

  let total = 0;
  total += remainder;

  if (list1) {
    total += list1.val;
  }

  if (list2) {
    total += list2.val
  }

  let currentNodeValue = total % 10;
  let currentNode = new Node(currentNodeValue);

  if (head === null) {
    head = currentNode;
  }

  if (previous !== null) {
    previous.next = currentNode;
  }

  return sumLists(list1 ? list1.next : null, list2 ? list2.next : null, total >= 10 ? 1 : 0, head, currentNode);
};

// Follow up
const sumLists2 = (list1, list2) => {
  // Your code here
}

module.exports = { sumLists, sumLists2 };
