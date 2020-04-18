function ListNode(val) {
  this.val = val;
  this.next = null;
}

let slow;
function isPalindrome(head) {
  slow = head;
  return go(head);
}

function go(fast) {
  if (!fast) {
    return true;
  }
  const isEqual = go(fast.next) && slow.val === fast.val;
  slow = slow.next;
  return isEqual;
}

const node1 = new ListNode(1);
node1.next = new ListNode(2);

const node2 = new ListNode(1);
node2.next = new ListNode(2);
node2.next.next = new ListNode(2);
node2.next.next.next = new ListNode(1);

console.log(isPalindrome(node2));

// 1,2,3,2,1

// 1,2,3,3,2,1

// console.log([1,2].reduce((p,n) => p ^ n))
