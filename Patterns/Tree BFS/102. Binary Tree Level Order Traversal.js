var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  let queue = [root];

  let result = [];

  while (queue.length > 0) {
    let curLevel = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      curLevel.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(curLevel);
  }

  return result;
};

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
