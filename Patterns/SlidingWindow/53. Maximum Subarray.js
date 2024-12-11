var maxSubArray = function(nums) {

  if(nums.length === 1){
      return nums[0]
  }

  
  let windowSum = 0;
  let start = 0;
  let result = Number.NEGATIVE_INFINITY;


  for(let end = 0; end < nums.length; end++){
      windowSum += nums[end];
      result = Math.max(result, windowSum);

      while(windowSum < 0){
          windowSum -= nums[start];
          start+=1
      }
  }

  return result;   
};


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