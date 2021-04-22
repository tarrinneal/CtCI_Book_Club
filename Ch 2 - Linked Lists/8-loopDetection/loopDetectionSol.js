function Node(val) {
  this.val = val;
  this.next = null;
}

const loopDetectionSol = (head) => {
  let slow = head;
  let fast = head;
  let loop = false;
  let map = new Map();
  while (fast) {
    fast = fast.next ? fast.next.next : null;
    if (!fast) return false;
    slow = slow.next;
    if (fast === slow) {
      loop = true;
      break;
    }
  }
  // reset slow, keep fast in the loop
  slow = head;
  while (true) {
    // check if all loop nodes have been added to map
    if (map.has(fast)) {
      // check if slow is loop entrance, the first time slow is in the map we know we are at the entrance
      if (map.has(slow)) return slow;
      // start slow
      slow = slow.next;
    }
    // add all nodes of loop to map
    map.set(fast, fast);
    fast = fast.next;
  }
};

module.exports = loopDetectionSol;
