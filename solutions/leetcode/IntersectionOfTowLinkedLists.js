const getIntersectionNode = function (headA, headB) {
  let nodeA = headA;
  let nodeB = headB;

  const map = new Map();

  while (true) {
    if (!nodeA && !nodeB) {
      return null;
    }
    if (nodeA) {
      if (map.get(nodeA.val) === nodeA) {
        return nodeA;
      }
      map.set(nodeA.val, nodeA);
      nodeA = nodeA.next;
    }
    if (nodeB) {
      if (map.get(nodeB.val) === nodeB) {
        return nodeB;
      }
      map.set(nodeB.val, nodeB);
      nodeB = nodeB.next;
    }
  }
};
