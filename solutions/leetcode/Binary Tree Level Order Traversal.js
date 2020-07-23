/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const answer = [];
  function traversal(node, level) {
    if (node) {
      if (answer[level]) {
        answer[level].push(node.val);
      } else {
        answer[level] = [node.val];
      }
      traversal(node.left, level + 1);
      traversal(node.right, level + 1);
    }
  }
  traversal(root, 0);
  console.log(answer);
  return answer;
};

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);

levelOrder(root);

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
