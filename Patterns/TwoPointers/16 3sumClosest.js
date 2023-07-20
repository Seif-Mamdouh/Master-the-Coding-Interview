// 16. 3Sum Closest
// Meduim

// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0



// yea that's a lot better and sexy
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let curSum = nums[i] + nums[left] + nums[right];

      if (Math.abs(curSum - target) < Math.abs(closestSum - target)) {
        closestSum = curSum;
      }

      if (curSum < target) {
        left++;
      } else if (curSum > target) {
        right--;
      } else {
        return curSum;
      }
    }
  }

  return closestSum;
};





// goddddan this shit takes a very long time
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let sum = null;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const _sum = nums[i] + nums[j] + nums[k];

        if (sum === null) sum = _sum;
        else if (Math.abs(_sum - target) < Math.abs(sum - target)) sum = _sum;
        else if (_sum > sum) break;
      }
    }
  }
  return sum;
};
