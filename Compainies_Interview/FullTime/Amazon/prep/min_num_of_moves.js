// Get Minimum Number of Moves
// FULLTIME
// Imagine you are shopping on Amazon.com for some good weight lifting equipment. The equipment you want has blocks of many different weights that you can combine to lift.

// The listing on Amazon gives you an array, blocks , that consists of n different weighted blocks, in kilograms. There are no two blocks with the same weight. The element blocks[i] denotes the weight of the i th block from the top of the stack. You consider weight lifting equipment to be good if the block at the top is the lightest, and the block at the bottom is the heaviest.

// More formally, the equipment with array blocks will be called good weight lifting equipment if it satisfies the following conditions assuming the index of the array starts from 1:

// blocks[1] < blocks[i] for all 2 ≤ i ≤ n
// blocks[i] < blocks[n] for all 1 ≤ i ≤ n-1
// In one move, you can swap the order of adjacent blocks. Find out the minimum number of moves required to form good weight lifting equipment.


// Function Description

// Complete the function getMinNumMoves in the editor.

// getMinNumMoves has the following parameter:

// int blocks[n] : the distinct weights

// Returns

// int : the minimum number of operations required


// Example 1 :

// Input: blocks = [2, 4, 3, 1, 6]
// Output: 3
// Explanation: The lightest block needs to move left. The heaviest block is already in the correct position.

// In the first move, swap the third and the fourth blocks: blocks = [2, 4, 1, 3, 6].
// Swap the second and the third blocks: blocks = [2, 1, 4, 3, 6].
// Swap the first and the second blocks: blocks = [1, 2, 4, 3, 6].

// Example 2 :

// Input: blocks = [4, 11, 9, 10, 12]
// Output: 0
// Explanation: The blocks are already in their correct positions.


// Example 3 :

// Input: blocks = [3, 2, 1]
// Output: 3

function getMinNumMoves(blocks) {
  const n = blocks.length;
  let minIndex = 0;
  let maxIndex = 0;

 
  for (let i = 1; i < n; i++) {
    if (blocks[i] < blocks[minIndex]) {
      minIndex = i;
    }
    if (blocks[i] > blocks[maxIndex]) {
      maxIndex = i;
    }
  }

  
  let minSwaps = minIndex;


  let maxSwaps = n - 1 - maxIndex;


  if (minIndex > maxIndex) {
    return minSwaps + maxSwaps - 1;
  } else {
    return minSwaps + maxSwaps;
  }
}


console.log(getMinNumMoves([2, 4, 3, 1, 6])); 
console.log(getMinNumMoves([4, 11, 9, 10, 12]));
console.log(getMinNumMoves([3, 2, 1])); 