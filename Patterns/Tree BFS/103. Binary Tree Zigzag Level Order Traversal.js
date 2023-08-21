var zigzagLevelOrder = function (root) {
  let result = [];

  if (root === null) {
    return [];
  }

  const queue = [];
  queue.push(root);
  let reverse = false; //switch

  while (queue.length > 0) {
    const levelSize = queue.length;
    let curLevel = [];

    for (let i = 0; i < levelSize; i++) {
      curNode = queue.shift();

      if (reverse) {
        curLevel.unshift(curNode.val);
      } else {
        curLevel.push(curNode.val);
      }

      if (curNode.left) {
        queue.push(curNode.left);
      }

      if (curNode.right) {
        queue.push(curNode.right);
      }
    }

    result.push(curLevel);
    reverse = !reverse;
  }
  return result;
};
