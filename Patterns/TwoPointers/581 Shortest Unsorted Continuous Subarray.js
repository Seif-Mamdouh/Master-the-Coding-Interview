// 581. Shortest Unsorted Continuous Subarray
// Medium

// 6788

// 238

// Add to List

// Share
// Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

// Return the shortest such subarray and output its length.

 

// Example 1:

// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Example 3:

// Input: nums = [1]
// Output: 0



var findUnsortedSubarray = function (nums) {
  const stack = [];
  const result = new Array(arr.length).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;

    while (i < j) {
      if (j > i) {
        continue;
      } else {
        results.push(nums[iy]);
      }
    }
  }
};