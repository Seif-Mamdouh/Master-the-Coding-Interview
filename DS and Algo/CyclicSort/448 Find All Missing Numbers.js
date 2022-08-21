/*
448. Find All Numbers Disappeared in an Array
Easy

7147

400

Add to List

Share
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
*/


function find_missing_numbers(nums) {
  let i = 0;
  while (i < nums.length) {
      const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }

  missingNumbers = [];

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      missingNumbers.push(i + 1);
    }
  }

  return missingNumbers;
}


//console.log(find_missing_numbers([-3, 2, -3, 4, 2]));
console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]));
// console.log(find_missing_numbers([2, 4, 1, 2]));
// console.log(find_missing_numbers([2, 3, 2, 1]));