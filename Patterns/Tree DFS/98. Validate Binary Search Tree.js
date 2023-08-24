var isValidBST = function (root) {
  function dfs(node, min, max) {
    if (node === null) {
      return true;
    }

    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false;
    }

    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  }

  return dfs(root, null, null);
};
