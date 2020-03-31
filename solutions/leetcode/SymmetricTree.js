function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const isSymmetric = function (root) {
  function next(left, right) {
    if (!left && !right) {
      return true;
    }

    if (
      !left ||
      !right ||
      left.val !== right.val ||
      !next(left.right, right.left)
    ) {
      return false;
    }

    return next(left.left, right.right);
  }

  if (!root) {
    return true;
  }

  return next(root.left, root.right);
};

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(2);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(4);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(3);

console.log(isSymmetric(tree));
// isSymmetric([1, 2, 2, null, 3, null, 3]);
