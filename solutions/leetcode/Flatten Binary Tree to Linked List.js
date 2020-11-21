var flatten = function (root) {
  let prev = null;

  function traversal(node) {
    if (!node) return null;

    traversal(node.right);
    traversal(node.left);
    node.right = prev;
    node.left = null;
    prev = node;
  }

  traversal(root);
};
