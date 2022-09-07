# /*

# 113. Path Sum II
# Medium

# 5439

# 119

# Add to List

# Share
# Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

# A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.


# Example 1:


# Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
# Output: [[5,4,11,2],[5,8,4,5]]
# Explanation: There are two paths whose sum equals targetSum:
# 5 + 4 + 11 + 2 = 22
# 5 + 8 + 4 + 5 = 22
# Example 2:


# Input: root = [1,2,3], targetSum = 5
# Output: []
# Example 3:

# Input: root = [1,2], targetSum = 0
# Output: []

# */


# /*

#                 --------------------STEPS---------------------

# This problem follows the Binary Tree Path Sum problem. We can follow the same
# DFS approach. There will be two differences though:

# 1 - Every time we find a root-to-leaf path, we will store it in a list.

# 2 - We will traverse all paths and will not stop processing after finding
#     the first path.

# */


class TreeNode:
      def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def find_paths(root, required_sum):
  allPaths = []
  find_paths_recursive(root, required_sum, [], allPaths)
  return allPaths


def find_paths_recursive(currentNode, required_sum, currentPath, allPaths):
  if currentNode is None:
    return

  # add the current node to the path
  currentPath.append(currentNode.val)

  # if the current node is a leaf and its value is equal to required_sum, save the 
  # current path
  if currentNode.val == required_sum and currentNode.left is None and currentNode.right is None:
    allPaths.append(list(currentPath))
  else:
    # traverse the left sub-tree
    find_paths_recursive(currentNode.left, required_sum -
                         currentNode.val, currentPath, allPaths)
    # traverse the right sub-tree
    find_paths_recursive(currentNode.right, required_sum -
                         currentNode.val, currentPath, allPaths)

  # remove the current node from the path to backtrack,
  # we need to remove the current node while we are going up the recursive call stack.
  del currentPath[-1]


def main():

  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(4)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  required_sum = 23
  print("Tree paths with required_sum " + str(required_sum) +
        ": " + str(find_paths(root, required_sum)))


main()




class TreeNode :
    def __init__(self,val, left = None, right = None):
        self.val = val;
        self.left = left;
        self.right = right; 
        



def find_paths_recursive(currentNode, required_sum, currentPath, allPaths):
    if currentNode is None: 
        return
    
    # add the current node to the path 
    currentPath.append(currentNode.val)
    
    #if the currentNode is a leaf and its value is equal
    # to required_sum, save the current Path 
    
    if currentNode.val == required_sum and currentNode.left == None and currentNode.right == None:
        allPaths.append(list(currentPath))
    
    else:
        #traverse the left sub tree 
        if currentNode.val == required_sum and currentNode.left == None and currentNode.right == None: 
            allPaths.append(list(currentPath)
        else: 
            #traverse the left sub-tree
            find_paths_recursive(currentNode.left, required_sum - currentNode.val,
                                 currentPath, allPaths)
            
            find_paths_recursive(currentNode.right, required_sum - currentNode.val,
                                 currentPath, allPaths)
            