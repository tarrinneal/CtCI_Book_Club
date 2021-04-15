function removeDupsSol (head) {
  const cache = {};
  let prev = null;
  let node = head;
  while (node) {
    if (cache[node.val]) {
      prev.next = node.next;
    } else {
      cache[node.val] = true;
      prev = node;
    }
    node = node.next;
  }
  return head;
}

module.exports = removeDupsSol;
