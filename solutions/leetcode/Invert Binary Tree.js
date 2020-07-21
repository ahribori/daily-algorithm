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
 * @return {TreeNode}
 */
const invertTree = function(root) {
  function invert(node) {
    if (!node) return null;
    let temp;
    temp = node.right;
    node.right = node.left;
    node.left = temp;
    if (node.right) invert(node.right);
    if (node.left) invert(node.left);
    return node;
  }
  return invert(root);
};
