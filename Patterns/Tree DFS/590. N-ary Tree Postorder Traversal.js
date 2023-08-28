var postorder = function (root) {
  const result = [];

  function dfs(node) {
    if (!node) {
      return [];
    }

    for (child of node.children) {
      dfs(child);
    }

    result.push(node.val);
  }

  dfs(root);
  return result;
};
