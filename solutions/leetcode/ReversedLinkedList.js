function ListNode(val) {
  this.val = val;
  this.next = null;
}

function reverseList(head) {
  if (!head) {
    return null;
  }
  let tail = null;
  while (true) {
    const node = new ListNode(head.val);
    if (tail) {
      node.next = tail;
    }
    tail = node;

    if (!head.next) {
      break;
    }
    head = head.next;
  }
  return tail;
}

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

reverseList(list);
