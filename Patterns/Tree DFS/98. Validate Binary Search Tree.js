var isValidBST = function (root) {
  if (!root) {
    return false;
  }

  let stack = [];

  let cur = root;

  let prev = null;

  while (cur !== null || stack.length > 0) {
    // Traverse to the leftmost node
    while (cur !== null) {
      console.log(`Pushing to stack: ${cur.val}`);
      stack.push(cur);
      cur = cur.left;
    }

    // Process the node
    cur = stack.pop();
    console.log(`Popped from stack: ${cur.val}`);

    // Check the BST property
    if (prev !== null && cur.val <= prev.val) {
      console.log(
        `BST violation: current value (${cur.val}) is not greater than previous value (${prev.val})`
      );
      return false;
    }

    // Update prev to the current node
    console.log(`Updating previous node to: ${cur.val}`);
    prev = cur;

    // Move to the right subtree
    cur = cur.right;
  }

  console.log("In-order traversal complete. The tree is a valid BST.");

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
