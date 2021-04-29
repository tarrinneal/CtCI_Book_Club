// Write code to remove duplicates from an unsorted linked list.

// Follow up: To reduce space complexity How would you solve this problem if a temporary buffer is not allowed? What does this do to time complexity?

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

function removeDups(node) {
  let head = node;
  //memoize the values
  let foundValues = {};
  let previousNode = null;

  //traverse the linked list
  while (node) {
    let currentValue = node.val;
    if (foundValues.hasOwnProperty(currentValue)) {
      let nextNode = node.next;
      previousNode.next = nextNode;
    } else {
      foundValues[currentValue] = true;
      previousNode = node;
    }

    node = node.next;
  }
  return head;
}

module.exports = removeDups;
