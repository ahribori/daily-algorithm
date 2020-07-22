function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  let count = 0;
  let answer = 0;
  function inorder(node) {
    if (node) {
      inorder(node.left);
      count++;
      if (count === k) {
        answer = node.val;
      }
      inorder(node.right);
    }
  }

  inorder(root);
  return answer;
};

const root1 = new TreeNode(
  3,
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4),
);

const root2 = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
  new TreeNode(6),
);

const root3 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const root4 = new TreeNode(
  3,
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4),
);

// kthSmallest(root1, 1); // 1
// kthSmallest(root2, 3); // 3
// kthSmallest(root3, 3);
console.log(kthSmallest(root4, 1));
