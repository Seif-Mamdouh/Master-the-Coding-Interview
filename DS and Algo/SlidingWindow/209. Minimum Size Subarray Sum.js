// 209. Minimum Size Subarray Sum
// Medium

// 7419

// 211

// Add to List

// Share
// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

var min_subArrylen = function (s, arr) {
    let windowSum = 0;
    let minLength = Infinity;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        while (windowSum >= s) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);

            windowSum -= arr[windowStart];

            windowStart += 1;
        }
    }

    return minLength;
}

console.log(
  `Smallest subarray length: ` + min_subArrylen(7, [2, 1, 5, 2, 3, 2])
);
console.log(`Smallest subarray length: ` + min_subArrylen(4, [1, 4, 4]));
console.log(
  `Smallest subarray length: ` + min_subArrylen(11, [1, 1, 1, 1, 1, 1, 1, 1])
);