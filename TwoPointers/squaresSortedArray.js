// 977. Squares of a Sorted Array


// Share
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]


var sortedSquares = function (nums) {
  let length = nums.length;
  let temp = 0;

  for (let i = 0; i < length; i++) {
    temp = Math.pow(nums[i], 2);
    nums[i] = temp;
  }

  nums.sort(function (a, b) {
    return a - b;
  });

  return nums;
};





var sortedSquares = function (A) {
  let sqrtNums = A.map((n) => n * n);
  let sortNums = sqrtNums.sort((a, b) => a - b);
  return sortNums;
};
