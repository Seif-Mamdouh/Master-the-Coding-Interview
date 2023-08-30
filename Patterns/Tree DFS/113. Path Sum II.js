/*

# Given a binary tree and a number ‘S’, 
# find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

# */

/*

This problem follows the Binary Tree Path Sum pattern. 
We can follow the same DFS approach. 
The additional thing we need to do is 
to keep track of the number representing the current path.

How do we calculate the path number for a node? 
Taking the first example mentioned above, say we are at node ‘7’. 
As we know, the path number for this node is ‘17’, 
which was calculated by: 1 * 10 + 7 = > 17. We will 

follow the same approach to calculate the path number of each node.

*/

var pathSum = function (root, targetSum) {
  if (!root) {
    return [];
  }

  const result = [];
  const stack = [[root, targetSum, []]];

  while (stack.length > 0) {
    const [node, remainingSum, path] = stack.pop();

    if (!node.left && !node.right && node.val === remainingSum) {
      result.push([...path, node.val]);
    }

    if (node.left) {
      stack.push([node.left, remainingSum - node.val, [...path, node.val]]);
    }

    if (node.right) {
      stack.push([node.right, remainingSum - node.val, [...path, node.val]]);
    }
  }

  return result;
};

var pathSum = function (root, targetSum) {
  let result = [];

  if (!root) {
    return result;
  }

  targetSum -= root.val;

  if (targetSum === 0 && root.left == null && root.right == null) {
    result.push([root.val]);
  }

  const leftPath = pathSum(root.left, targetSum);
  const rightPath = pathSum(root.right, targetSum);

  for (let path of leftPath) {
    result.push([root.val, ...path]);
  }

  for (let path of rightPath) {
    result.push([root.val, ...path]);
  }

  return result;
};


class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function find_sum_of_path_numbers(root) {
  return find_root_to_leaf_path_numbers(root, 0);
}

function find_root_to_leaf_path_numbers(currentNode, pathSum) {
  
  if (currentNode === null) {
    return 0;
  }

  //formula
  pathSum = 10 * pathSum + currentNode.val;

  if (currentNode.left === null && currentNode.right === null) {
    return pathSum
  }

  //traverse through the tree and get the sum of the all paths in the tree 
  return (
    find_root_to_leaf_path_numbers(currentNode.left, pathSum) +
    find_root_to_leaf_path_numbers(currentNode.right, pathSum)
  ); 

}


const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);



//
