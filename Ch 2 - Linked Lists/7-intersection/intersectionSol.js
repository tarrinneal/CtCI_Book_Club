function Node(val) {
  this.val = val;
  this.next = null;
}

const intersection = (head1, head2) => {
  let node1 = head1;
  while (node1) {
    let node2 = head2;
    while(node2) {
      if (node1 === node2) return node1;
      node2 = node2.next;
    }
    node1 = node1.next;
  }
  return false;
};

module.exports = intersection;
