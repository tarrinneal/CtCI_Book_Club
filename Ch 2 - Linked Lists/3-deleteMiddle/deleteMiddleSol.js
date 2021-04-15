const deleteMiddleSol = (node) => {
  if (!node) return;
  node.val = node.next.val;
  node.next = node.next.next;
};

module.exports = deleteMiddleSol;
