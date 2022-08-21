/*
41. First Missing Positive
Hard

11187

1425

Add to List

Share
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/

//answer
function find_first_smallest_missing_positive(nums) {
    let i = 0;
    let n = nums.length;

    while (i < nums.length) {
        let j = nums[i] - 1;
        if (i < nums.length && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i += 1;
        }
    }

    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
}


var firstMissingPositive = function (nums) {
  let i = 0;
  n = nums.length;
  while (i < n) {
    let j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  for (i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
};



console.log(find_first_smallest_missing_positive([-3, 1, 5, 4, 2]));
// console.log(find_first_smallest_missing_positive([3, -2, 0, 1, 2]));
// console.log(find_first_smallest_missing_positive([3, 2, 5, 1]));

