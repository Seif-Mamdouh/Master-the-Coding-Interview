var maxSubArray = function (nums) {
  let windowStart = 0;
  let sum = 0;
  let maxSum = -Infinity;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    let endElement = nums[windowEnd];
    sum += endElement;

    if (sum < maxSum) {
      windowStart += 1;
    } else {
      maxSum = Math.max(maxSum, sum);
    }

    if (sum < 0) {
      sum = 0;
      windowStart = windowEnd + 1;
    }
  }

  return maxSum;
};
