// Given the heads of two singly linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value That is if the kth node of the first linked list is the exact same node by reference as teh jth node of the second linked list then they are intersecting.

/*
Example:
ll1 = 1 -> 2 -> 3
                 \
ll2 =   7 -> 9 -> 4 -> 5 -> 6
return 4 -> 5 -> 6 // the node with value of 4 and next of 5

return false if there is no intersection
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

const intersection = (head1, head2) => {
  //Please code here
};


module.exports = intersection;
