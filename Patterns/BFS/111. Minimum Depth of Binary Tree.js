var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  const queue = [];
  queue.push(root);
  let count = 1;

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const curNode = queue.shift();

      // Check if the current node is a leaf node (no children)
      if (!curNode.left && !curNode.right) {
        return count;
      }

      if (curNode.left) {
        queue.push(curNode.left);
      }
      if (curNode.right) {
        queue.push(curNode.right);
      }
    }

    count++; // Move to the next level
  }

  return depth;
};
