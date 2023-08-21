class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function find_successor(root, key) {
  if (root === null) {
    return null;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    currentNode = queue.shift();
    // console.log(currentNode);
    // insert the children of current node in the queue
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
    // break if we have found the key
    if (currentNode.val === key) {
      break;
    }
  }

  return null;
}

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

let result = find_successor(root, 3);
if (result) {
  console.log(result.val);
}

root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

result = find_successor(root, 9);
if (result) {
  console.log(result.val);
}

result = find_successor(root, 12);
if (result) {
  console.log(result.val);
}
