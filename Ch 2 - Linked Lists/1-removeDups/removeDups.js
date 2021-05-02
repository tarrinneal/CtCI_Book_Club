// Write code to remove duplicates from an unsorted linked list.

// Follow up: To reduce space complexity How would you solve this problem if a temporary buffer is not allowed? What does this do to time complexity?

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

function removeDups(head) {
  let dict = {};
  let last = null;
  let looper = (node) => {
    if (dict[node.val]) {
      last.next = node.next;
    } else {
      dict[node.val] = true;
      last = node;
    }
    if (node.next) {
      looper(node.next);
    }
  };
  looper(head);
  return head;
}

module.exports = removeDups;
