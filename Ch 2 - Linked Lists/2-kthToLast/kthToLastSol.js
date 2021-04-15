const kthToLastSol = (head, k) => {
  if (!head || k < 1) return null;
  let len = 0;
  // traverse list once to find length
  let node = head;
  while (node) {
    len++;
    node = node.next;
  }
  const targetNum = (len - k) + 1;
  if (targetNum <= 0) return null;
  let count = 0;
  // traverse again to find kth to last node
  node = head;
  while (node) {
    count++;
    if (count === targetNum) return node;
    node = node.next;
  }
  return null;
};

module.exports = kthToLastSol;
