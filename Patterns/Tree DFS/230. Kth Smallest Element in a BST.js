var kthSmallest = function (root, k) {
  let stack = [];
  let result = 0;

  let cur = root;

  while (cur !== null || stack.length > 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    k--;

    if (k === 0) {
      result += cur.val;
    }

    cur = cur.right;
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
