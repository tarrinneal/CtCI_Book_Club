function removeDupsSol (head) {
  // cache node values
  const cache = {};
  let prev = null;
  let node = head;
  // traverse list
  while (node) {
    // if there's a duplicate drop it from the list
    if (cache[node.val]) {
      prev.next = node.next;
    } else {
      // add new values to the cache
      cache[node.val] = true;
      prev = node;
    }
    node = node.next;
  }
  return head;
}

module.exports = removeDupsSol;
