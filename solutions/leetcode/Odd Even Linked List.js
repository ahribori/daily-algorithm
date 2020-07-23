const { createLinkedListFromArray, printLinkedList } = require('./helper');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function (head) {
  if (!head) return null;
  let oddTail = head,
    evenHead = head.next,
    evenTail = head.next;

  while (evenTail && evenTail.next) {
    oddTail.next = evenTail.next;
    oddTail = oddTail.next;
    evenTail.next = oddTail.next;
    evenTail = evenTail.next;
  }

  oddTail.next = evenHead;
  return head;
};

// oddEvenList(createLinkedListFromArray([1]));
oddEvenList(createLinkedListFromArray([1, 2, 3, 4, 5, 6]));
