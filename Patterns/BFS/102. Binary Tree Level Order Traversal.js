var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    const curLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      curLevel.push(node.val);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    result.push(curLevel);
  }

  return result;
};
