// 260. Single Number III
// Medium

// 4319

// 198

// Add to List

// Share
// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.
// Example 2:

// Input: nums = [-1,0]
// Output: [-1,0]
// Example 3:

// Input: nums = [0,1]
// Output: [1,0]




var singleNumber = function (nums) {
  var hashT = {},
    arr = [];

  for (var i = 0; i < nums.length; i++) {
    if (hashT[nums[i]] === undefined) hashT[nums[i]] = 1;
    else hashT[nums[i]]++;
  }

  for (var j in hashT) {
    if (hashT[j] == 1) arr.push(parseInt(j));
  }
  return arr;
};
