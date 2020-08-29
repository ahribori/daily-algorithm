function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  try {
    let slow = head;
    let fast = head.next;
    while (fast.val !== slow.val) {
      slow = slow.next;
      fast = fast.next.next;
    }
  } catch (e) {
    return false;
  }
  return true;
};

const node1 = new ListNode(3);
node1.next = new ListNode(2);
node1.next.next = new ListNode(0);
node1.next.next.next = new ListNode(4);
node1.next.next.next.next = node1;

hasCycle(node1);
