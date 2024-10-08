// 137. Single Number II

// Medium

// 4695

// 509

// Add to List

// Share
// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99


var singleNumber = function (nums) {
  var hash = {};

  for (var i = 0; i < nums.length; i++) {
    var key = nums[i];

    if (!hash[key]) {
      hash[key] = 1;
    } else if (hash[key] == 1) {
      hash[key]++;
    } else if (hash[key] == 2) {
      delete hash[key];
    }
  }

  for (var k in hash) {
    return k;
  }
};