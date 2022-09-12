/*

1430. Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree
Medium

168

12

Add to List

Share
Given a binary tree where each path going from the root to any leaf form a valid sequence, check
if a given string is a valid sequence in such binary tree. 

We get the given string from the concatenation of an array of integers arr and the concatenation of all values 
of the nodes along a path results in a sequence in the given binary tree.



Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
Output: true
Explanation: 
The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure). 
Other valid sequences are: 
0 -> 1 -> 1 -> 0 
0 -> 0 -> 0


Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
Output: false 
Explanation: The path 0 -> 0 -> 1 does not exist, therefore it is not even a sequence.

Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
Output: false
Explanation: The path 0 -> 1 -> 1 is a sequence, but it is not a valid sequence.

*/


class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


function find_path(root, sequence) {
    if (root === null) {
        return 0;
    }

    return found_path(root, sequence, 0);
}


function found_path(currentNode, sequence, sequenceIndex) {
    if (currentNode === null) {
        return 0;
    }
    if (currentNode.val !== sequence[sequenceIndex]) {
        return false;
    }

    let seqLen = sequence.length;
    
    if (currentNode.left === null && currentNode.right === null
        && sequenceIndex === seqLen - 1) {
        return true;
    }

    return (
        found_path(currentNode.left, sequence, sequenceIndex + 1) ||
        found_path(currentNode.right, sequence, sequenceIndex + 1)
    );
}





const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 1])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`);




// Runtime: 91 ms, faster than 100.00 % of JavaScript online submissions for 
// Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree.

// Memory Usage: 48.6 MB, less than 94.29 % of JavaScript online submissions for 
// Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree