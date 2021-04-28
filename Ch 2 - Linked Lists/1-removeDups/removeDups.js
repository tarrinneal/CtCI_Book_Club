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
  let looper = (node = head) => {
    if (dict[node.val]) {
      last.next = node.next;
    } else {
      if (node.next) {
        dict[node.val] = 1;
        last = node;
        looper(node.next);
      }
    }
  };
  looper();
  return head;
}

module.exports = removeDups;
