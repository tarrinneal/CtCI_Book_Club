// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. (IMPORTANT: the partition element can appear anywhere in the "right partition" it does not have to appear between the left and the right partitions.)  The nodes within each partition do not have to be in any particular order. The space below indicates the partition point but doesn't have to be denoted in any way in the linked list.

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

const partition = (head, x) => {
  let node = head;
  //set up low list
  let lowHead = null;
  let lowTail = null;
  //set up high list
  let highHead = null;
  let highTail = null;

  //traverse the passed in list
  while (node) {
    if (node.val < x) {
      if (lowHead === null) {
        lowHead = node;
        lowTail = node;
      } else {
        lowTail.next = node;
        lowTail = node;
      }
    } else {
      if (highHead === null) {
        highHead = node;
        highTail = node;
      } else {
        highTail.next = node;
        highTail = node;
      }
    }
    node = node.next;
  }
  //connect the two lists
  if (lowTail === null) {
    return highHead;
  }
  lowTail.next = highHead;
  //return lowHead
  return lowHead;
};

module.exports = partition;
