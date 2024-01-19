var kthSmallest = function (root, k) {
  let stack = [];
  // let count = 0;
  let result = 0;

  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    k--;

    if (k === 0) {
      result = root.val;
      break;
    }

    root = root.right;
  }

  return result;
};

var kthSmallest = function (root, k) {
  let stack = [root];

  let res = 0;

  while (stack.length > 0) {
    const node = stack.pop();

    if (node.val === k) {
      res = k;
    }

    if (node.val > k) {
      if (node.left) {
        stack.push(node.left);
        if (node.left && node.left.val === k) {
          res = k;
        }
      }
    } else {
      if (node.right) {
        stack.push(node.right);
        if (node.right && node.right.val === k) {
          res = k;
        }
      }
    }
  }

  return res;
};

var kthSmallest = function (root, k) {
  return findNumber(root, k, 0);
};

function findNumber(node, target, result) {
  if (!node) {
    return null;
  }

  if (node.val === target) {
    return target;
  }

  return (
    findNumber(node.left, target, result) ||
    findNumber(node.right, target, result)
  );
}
