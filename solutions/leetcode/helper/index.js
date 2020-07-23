function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
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

function createBSTFromArray(nums) {
  if (nums.length === 0) return null;
  let root;

  function create(items, parent) {
    if (items.length === 0) return null;
    const midIndex = Math.floor((items.length - 1) / 2);
    const mid = new TreeNode(items[midIndex]);
    if (!root) root = mid;
    const leftItems = items.slice(0, midIndex);
    const rightItems = items.slice(midIndex + 1, items.length);
    if (parent) {
      parent[parent.val > mid.val ? 'left' : 'right'] = mid;
    }
    create(leftItems, mid);
    create(rightItems, mid);
  }
  create(nums, null);

  return root;
}

module.exports = {
  createLinkedListFromArray,
  createBSTFromArray,
  printLinkedList,
};
