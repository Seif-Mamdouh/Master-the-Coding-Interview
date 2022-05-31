// 15. 3Sum

// Share
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

var threeSum = function (array) {
  array.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] != array[i - 1]) {
      // making sure our solution set does not contain duplicate triplets
      let left = i + 1;
      let right = array.length - 1;

      while (left < right) {
        const currentSum = array[i] + array[left] + array[right];
        if (currentSum === 0) {
          triplets.push([array[i], array[left], array[right]]);
          while (array[left] == array[left + 1]) left++;
          while (array[right] == array[right - 1]) right--; // making sure our solution set does not contain duplicate triplets
          left++;
          right--;
        } else if (currentSum < 0) {
          left++;
        } else if (currentSum > 0) {
          right--;
        }
      }
    }
  }
  return triplets;
};








var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < nums.length - 2; i++){
    if (nums[i] != nums[i - 1]){
      let j = i + 1;
      let k = nums.length - 1; 

      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];

        if (sum == 0) {
          triplets.push(nums[i], nums[j], nums[k]); 
          while (nums[j] == nums[j + 1]) j++; 
          while (nums[k] == nums[k - 1]) k--;
          j++;
          k--;

        } else if (sum < 0) {
          j++;
        } else if (sum > 0) {
          k--;
        }
      }
    }
  }
  return triplets;
};
