var connect = function (root) {
  if (!root) {
    return root;
  }

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let prevNode = null;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      if (prevNode !== null) {
        prevNode.next = currentNode;
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      prevNode = currentNode;
    }
  }

  return root;
};
