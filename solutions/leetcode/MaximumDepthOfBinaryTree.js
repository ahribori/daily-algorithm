function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function maxDepth(root) {
  return root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0;
}

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.left.left = new TreeNode(null);
tree.left.right = new TreeNode(null);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);
maxDepth(tree);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.left.left = new TreeNode(3);
tree2.left.left.left = new TreeNode(4);
tree2.left.left.left.left = new TreeNode(5);
maxDepth(tree2);
