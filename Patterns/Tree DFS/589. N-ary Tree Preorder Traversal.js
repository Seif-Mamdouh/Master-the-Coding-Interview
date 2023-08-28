var preorder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const stack = [];
  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);

    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
  return result;
};
