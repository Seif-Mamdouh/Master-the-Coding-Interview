// 53. Maximum Subarray

var maxSubArray = function (nums) {
  let windowSum = 0;
  let windowStart = 0;
  let result = Number.NEGATIVE_INFINITY;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];
    result = Math.max(result, windowSum);

    while (windowSum < 0) {
      windowSum -= nums[windowStart];
      windowStart += 1;
    }
  }

  return result;
};

// Beats 98.41%of users with JavaScript
// Runtime
// Details
// 62ms
// Beats 98.41% of users with JavaScript

// Memory
// 50.64mb
// Beats 18.99%of users with JavaScript
