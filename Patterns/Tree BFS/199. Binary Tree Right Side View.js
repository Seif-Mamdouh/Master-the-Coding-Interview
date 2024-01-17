var rightSideView = function (root) {
  if (root === null) {
    return [];
  }

  let res = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let right = null;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      right = node.val;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    res.push(right);
  }

  return res;
};

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
