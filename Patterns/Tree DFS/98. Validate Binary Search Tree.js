var isValidBST = function (root) {
  let stack = [];
  let prev = null;

  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    if (prev !== null && root.val <= prev.val) {
      return false;
    }

    prev = root;
    root = root.right;
  }

  return true;
};

var isValidBST = function (root) {
  let stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node.left) {
      if (node.left && node.left.val >= node.val) {
        return false;
      } else {
        stack.push(node.left);
      }
    }

    if (node.right) {
      if (node.right && node.right.val <= node.val) {
        return false;
      } else {
        stack.push(node.right);
      }
    }
  }

  return true;
};

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
