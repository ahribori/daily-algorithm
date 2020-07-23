function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
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

  console.log(JSON.stringify(root, null, 2));
  return root;
};

sortedArrayToBST([-10, -3, 0, 5, 9]);
