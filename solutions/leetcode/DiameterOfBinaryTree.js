function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function getHeight(root) {
  return root ? 1 + Math.max(getHeight(root.left), getHeight(root.right)) : 0;
}

function diameterOfBinaryTree(root) {
  if (root) {
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    return Math.max(
      leftHeight + rightHeight,
      diameterOfBinaryTree(root.left),
      diameterOfBinaryTree(root.right),
    );
  }
  return 0;
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

const diameter = diameterOfBinaryTree(tree);
console.log(diameter);
