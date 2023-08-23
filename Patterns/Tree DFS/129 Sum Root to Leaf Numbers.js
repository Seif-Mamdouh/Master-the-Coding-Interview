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
