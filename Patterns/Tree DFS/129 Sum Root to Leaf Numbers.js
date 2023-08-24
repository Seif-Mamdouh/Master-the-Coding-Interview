// stack
var sumNumbers = function (root) {
  let result = 0;
  const stack = [];

  stack.push([root, root.val]);

  while (stack.length > 0) {
    const [node, num] = stack.pop();

    if (!node.left && !node.right) {
      result += num;
    }

    if (node.right !== null) {
      stack.push([node.right, num * 10 + node.right.val]);
    }

    if (node.left) {
      stack.push([node.left, num * 10 + node.left.val]);
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
