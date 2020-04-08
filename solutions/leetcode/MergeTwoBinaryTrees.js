function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function mergeTrees(t1, t2) {
  if (!t1 && !t2) {
    return null;
  }

  if (t1 && !t2) {
    const root = new ListNode(t1.val);
    root.left = mergeTrees(t1.left, null);
    root.right = mergeTrees(t1.right, null);
    return root;
  }

  if (!t1 && t2) {
    const root = new ListNode(t2.val);
    root.left = mergeTrees(null, t2.left);
    root.right = mergeTrees(null, t2.right);
    return root;
  }

  const root = new ListNode(t1.val + t2.val);
  root.left = mergeTrees(t1.left, t2.left);
  root.right = mergeTrees(t1.right, t2.right);
  return root;
}

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(3);
tree1.right = new TreeNode(2);
tree1.left.left = new TreeNode(5);

const tree2 = new TreeNode(2);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(3);
tree2.left.right = new TreeNode(4);
tree2.right.right = new TreeNode(7);

console.log(JSON.stringify(mergeTrees(tree1, tree2), null, 2));
