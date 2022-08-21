// 442. Find All Duplicates in an Array
// Medium

// 7008

// 272

// Add to List

// Share
// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []


var findDuplicates = function find_all_duplicates(nums) {
  let i = 0;
  while (i < nums.length) {
    j = nums[i] - 1;
    if (nums[i] != nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i++;
    }
  }

  duplicateNumbers = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicateNumbers.push(nums[i]);
    }
  }

  return duplicateNumbers;
};


console.log(find_all_duplicates([3, 4, 4, 5, 5]));
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));