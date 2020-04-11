function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let count = 0;
function diameterOfBinaryTree(node) {
  // TODO
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
