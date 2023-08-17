var averageOfLevels = function (root) {
  let result = [];

  if (root === null) {
    return result;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const levelSize = queue.length;
    let curLevel = [];

    for (let i = 0; i < levelSize; i++) {
      let curNode = queue.shift();
      curLevel.push(curNode.val);

      if (curNode.left) {
        queue.push(curNode.left);
      }

      if (curNode.right) {
        queue.push(curNode.right);
      }
    }

    let sum = curLevel.reduce((acc, num) => acc + num, 0);
    let avg = sum / curLevel.length;
    result.push(avg);
  }

  return result;
};
