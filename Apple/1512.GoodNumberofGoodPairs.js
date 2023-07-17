// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

var numIdenticalPairs = function (nums) {
  let pairCount = 0;
  let map = {}; // Use an object instead of Map
  for (let n of nums) {
    map[n] = (map[n] || 0) + 1; // increment the count of 'n' in the map
    // every new occurrence of a number can be paired with every previous occurrence
    // so if a number has already appeared 'p' times, we will have 'p-1' new pairs
    pairCount += map[n] - 1;
  }
  return pairCount;
};
