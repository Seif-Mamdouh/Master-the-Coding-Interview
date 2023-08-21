var levelOrderBottom = function (root) {
  let result = [];

  if (root === null) {
    return result;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const levelSize = queue.length;
    const curLevel = [];

    for (let i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      curLevel.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.unshift(curLevel);
  }

  return result;
};
