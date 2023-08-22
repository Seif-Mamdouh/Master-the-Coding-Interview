var rightSideView = function (root) {
  if (root === null) {
    return [];
  }

  const queue = [];
  queue.push(root);

  const result = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let lastNode;
    for (let i = 0; i < levelSize; i++) {
      const curNode = queue.shift();
      lastNode = curNode.val;

      if (curNode.left) {
        queue.push(curNode.left);
      }

      if (curNode.right) {
        queue.push(curNode.right);
      }
    }

    result.push(lastNode);
  }

  return result;
};
