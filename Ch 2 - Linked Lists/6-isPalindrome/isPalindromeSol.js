function Node(val) {
  this.val = val;
  this.next = null;
}

const isPalindromeSol = (head) => {
  let node = head;
  let count = 0;
  let firstHalf = [];
  while(node) {
    count++;
    node = node.next;
  }
  const isOdd = count % 2 !== 0;
  const half = (count % 2 === 0) ? (count / 2) : Math.floor(count / 2);
  count = 0;
  node = head;
  while (node) {
    count++
    if (isOdd && count === half + 1) {
      node = node.next;
      continue;
    }
    if (count > half) {
      if (node.val !== firstHalf.pop().val) return false;
    } else {
      firstHalf.push(node);
    }
    node = node.next;
  }
  return true;
};

module.exports = isPalindromeSol;
