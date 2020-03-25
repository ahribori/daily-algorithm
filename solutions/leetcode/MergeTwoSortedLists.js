function ListNode(val) {
  this.val = val;
  this.next = null;
}

function convertArrayToLinkedList(array) {
  if (array.length === 0) {
    return;
  }
  let linkedList;
  let currentNode;
  let i = 0;
  while (i < array.length) {
    if (!linkedList) {
      linkedList = new ListNode(array[i]);
      currentNode = linkedList;
    } else {
      currentNode.next = new ListNode(array[i]);
      currentNode = currentNode.next;
    }
    i++;
  }
  return linkedList;
}

function mergeTwoLists(l1, l2) {
  let node = new ListNode(-1);
  let output = node;

  while (l1 || l2) {
    if (!l2 || l1 && l1.val <= l2.val) {
      node.next = l1;
      node = node.next;
      l1 = l1.next;
    } else {
      node.next = l2;
      node = node.next;
      l2 = l2.next;
    }
  }
  return output.next;
}

mergeTwoLists(
  convertArrayToLinkedList([1, 2, 4]),
  convertArrayToLinkedList([1, 3, 4]),
);
