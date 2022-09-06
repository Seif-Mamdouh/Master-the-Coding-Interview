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

/*---------------------------ANSWER-------------------------------------
 To recursively traverse a binary tree in a DFS fashion, we can start from the root and at every step, 
make two recursive calls one for the left and one for the right child.

Here are the steps for our Binary Tree Path Sum problem:

1 - Start DFS with the root of the tree.

2 - If the current node is not a leaf node, do two things:
      Subtract the value of the current node from the given number to get a new sum => S = S - node.value
      Make two recursive calls for both the children of the current node with the new number calculated in the previous step.

3 - At every step, see if the current node being visited is a leaf node and if its value is equal 
    to the given number ‘S’. If both these conditions are true, we have found the required root-to-leaf path, therefore return true.
4 - If the current node is a leaf but its value is not equal to the given number ‘S’, return false.






*/




class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function hasPath(root, sum ) {
  
}