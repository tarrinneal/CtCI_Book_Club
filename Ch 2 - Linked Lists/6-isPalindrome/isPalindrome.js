// Write a function to check if a linked list is a palindrome.

/*
Example:
ll1 = [1, 2, 3, 4, 5, 6] -> false
ll2 = [1, 2, 3, 2, 1] -> true
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


const isPalindrome = (head) => {
  let node = head;
  let convertedToArray = [];
  //traverse the linked list
  while (node) {
    //push each value to an array.
    convertedToArray.push(node.val);
    node = node.next;
  }

  let forward = convertedToArray.join('');
  convertedToArray.reverse();
  let backwards = convertedToArray.join('');
  if (forward === backwards) {
    return true;
  }
  return false;
};


module.exports = isPalindrome;
