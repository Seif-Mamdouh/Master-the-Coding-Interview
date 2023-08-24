// stack
var sumNumbers = function (root) {
    if (!root) return 0;

    let result = 0;
    const stack = [root];

    while (stack.length > 0) {
      const node = stack.pop();

      if (!node.left && !node.right) {
        result += node.val;
      }

      if (node.right) {
        node.right.val = node.val * 10 + node.right.val;
        stack.push(node.right);
      }

      if (node.left) {
        node.left.val = node.val * 10 + node.left.val;
        stack.push(node.left);
      }
    }

    return result;
};



// recursion
var sumNumbers = function (root) {
  return root_to_leaf_path(root, 0);
};

function root_to_leaf_path(curNode, pathSum) {
  if (curNode == null) {
    return 0;
  }

  pathSum = 10 * pathSum + curNode.val;

  if (curNode.left === null && curNode.right === null) {
    return pathSum;
  }

  return (
    root_to_leaf_path(curNode.left, pathSum) +
    root_to_leaf_path(curNode.right, pathSum)
  );
}
