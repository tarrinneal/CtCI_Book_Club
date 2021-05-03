// Given a linked list that may contain a loop, write an algorithm to return the node at the beginning of the loop or false if there is no loop

/*
Example:
ll1 = 1 -> 2 -> 3 -> 4 -> 2 (same 2 as before)
return 2 node
return false if there is no loop
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

const loopDetection = (head) => {
  let tortoise = head;
  let hare = head.next;
  let cycle = false;
  let intersectionIndex = 0;
  let length = 0;
  let node = head;
  while (node) {
    length++;
    node = node.next;
  }
  while (hare && hare.next) {
    intersectionIndex++;
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare === tortoise) {
      cycle = true;
      break;
    }
  }
  if (cycle) {
    let loopIndex = (length - intersectionIndex) + 1;
    node = head;
    let index = 0;
    while (node) {
      index++
      if (index === loopIndex) {
        return node;
      }
      node = node.next;
    }
  } else {
    return false;
  }
};


module.exports = loopDetection;
