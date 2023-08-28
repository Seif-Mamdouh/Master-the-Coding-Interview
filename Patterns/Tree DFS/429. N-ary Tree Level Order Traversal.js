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
      console.log(node);
      curLevel.push(node.val);

      for (const child of node.children) {
        queue.push(child);
      }
    }

    result.push(curLevel);
  }

  return result;
};
