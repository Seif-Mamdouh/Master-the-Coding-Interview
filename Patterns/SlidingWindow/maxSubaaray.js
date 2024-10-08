//Given an array, find the average of all  subarrays of ‘K’ contiguous elements in it.

//Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], (K = 5);


function max_sub_array_of_size_k(k, arr) {
    let result = 0;
    let windowStart= 0;
    let windowSum = 0;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
      windowSum += arr[windowEnd];
      if(windowEnd >= k - 1){
        result = Math.max(result, windowSum);
        windowSum -= arr[windowStart];
        windowStart += 1;
      }
    }
  return result;
}

console.log(
  `Maximum sum of a subarray of size K: ` +
    max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])
);
console.log(
  `Maximum sum of a subarray of size K: ` +
    max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])
);

//now add

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

// Example 1:

// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].
// Example 2:

// Input: [2, 3, 4, 1, 5], k=2 
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].






// function max_sub_array_of_size_k(k, arr) {
//   let maxSum = 0,
//     windowSum = 0,
//     windowStart = 0;

//   for (window_end = 0; window_end < arr.length; window_end++) {
//     windowSum += arr[window_end]; // add the next element
//     // slide the window, no need to slide if we've not hit the window size of 'k'
//     if (window_end >= k - 1) {
//       maxSum = Math.max(maxSum, windowSum);
//       windowSum -= arr[windowStart]; // subtract the element going out
//       windowStart += 1; // slide the window ahead
//     }
//   }
//   return maxSum;
// }

// console.log(
//   `Maximum sum of a subarray of size K: ` +
//     max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])
// );
// console.log(
//   `Maximum sum of a subarray of size K: ` +
//     max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])
// );