function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createLinkedListFromArray(array) {
  if (!array || array.length === 0) {
    return null;
  }
  let head;
  let tail;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const node = new ListNode(item);
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
  }
  return head;
}

function printLinkedList(node) {
  let current = node;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

module.exports = {
  createLinkedListFromArray,
  printLinkedList,
};
