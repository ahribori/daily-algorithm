function ListNode(val) {
  this.val = val;
  this.next = null;
}

// LinkedList -> Array
function middleNode(head) {
  const cached = [];
  while (true) {
    cached.push(head);
    if (!head.next) {
      break;
    }
    head = head.next;
  }
  const middleItemIndex =
    cached.length % 2 === 0
      ? Math.ceil((cached.length - 1) / 2)
      : (cached.length - 1) / 2;
  return cached[middleItemIndex];
}

// 포인터 두개로
function middleNode2(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);
list.next.next.next.next.next = new ListNode(6);

// middleNode(list);
middleNode2(list);
