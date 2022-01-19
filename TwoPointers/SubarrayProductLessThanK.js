// 713. Subarray Product Less Than K
// Medium

// Share
// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

 

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0


var numSubarrayProductLessThanK = function (nums, k) {
  let product = 1;
  let left = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (left <= right && product >= k) {
      product /= nums[left];
      left += 1;
    }
    count += right - left + 1;
  }
  return count;
};

var numSubarrayProductLessThanK = function (nums, k) {
  let product = 1;
  let l = 0;
  let r = 0;
  let count = 0;

  while (l < nums.length && r < nums.length) {
    if (product * nums[r] < k) {
      product *= nums[r];
      count += r - l + 1;
      r++;
    } else {
      product /= nums[l];
      l++;
    }
  }

  return count;
};


var numSubarrayProductLessThanK = function (nums, k) {
  let length = nums.length;
  let counter = 0;
  for (let i = 0; i < length; i++) {
    let product = nums[i];
    if (product < k) {
      counter += 1;
    } else {
      continue;
    }
    for (let j = i + 1; j < length; j++) {
      product *= nums[j];
      if (product < k) {
        counter += 1;
      } else {
        break;
      }
    }
  }
  return counter;
};



//Okay this is interesting
//so basically, we have an array of unsorted indexes.
//we need to split the array into all subarrays
//we have to make the product of each subarray less than k

//in the examples, it's less than a 100

//now what's the approach to solve this problem?
// Two Pointers
// Since the multiplication will not overflow, we can use one variable to store the product
// We multiply the current number and adjust the left pointer until we have product smaller than k
// Then the number of product less than k is equal to current - left + 1
// Time complexity O(n)
// Space complexity O(1)
