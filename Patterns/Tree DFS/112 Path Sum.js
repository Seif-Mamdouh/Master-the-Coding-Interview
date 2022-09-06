/*
112. Path Sum
Easy

6403

828

Add to List

Share
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

 

Example 1:


Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
Example 2:


Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
Example 3:

Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function hasPath(root, sum) {
  if (root === null) {
    return false;
  }

  // if the current node is a leaf and its value is equal to the sum, we've found a path
  if (root.val === sum && root.left === null && root.right === null) {
    return true;
  }

  // recursively call to traverse the left and right sub-tree
  // return true if any of the two recursive call return true
  return (
    hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val)
  );
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${hasPath(root, 23)}`);
console.log(`Tree has path: ${hasPath(root, 16)}`);