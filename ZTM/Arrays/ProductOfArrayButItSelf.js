// 238. Product of Array Except Self
// Medium

// 12709

// 756

// Add to List

// Share
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

//Basically this is an array that has an bunch of integers
//The program we tryna build is traversing through an array, getting the product
//of every index except the one we are currently at
//if we are at [1,2,3]
//              ^ 
//then the output would be 2 * 3

//most recent answer 

var productExceptSelf = function (nums) {
  let left = new Array(nums.length).fill(1);
  let right = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = left[i] * right[i];
  }

  return nums;
};









var productExceptSelf = function (nums) {
  // Value to increment per each index
  let carry = 1;
  // Array to return all the product values
  const output = Array(nums.length).fill(1);
  // Add products to output array starting at the front
  for (let i = 0; i < nums.length; i++) {
    output[i] *= carry;
    carry *= nums[i];
  }
  // Reset carry
  carry = 1;
  // Add products to output array starting at the back
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= carry;
    carry *= nums[i];
  }
  return output;
};


//this is going to be interesting