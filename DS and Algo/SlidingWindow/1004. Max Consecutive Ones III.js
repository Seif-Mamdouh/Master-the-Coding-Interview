// 1004. Max Consecutive Ones III
// Medium

// 4947

// 64

// Add to List

// Share
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// This problem follows the Sliding Window pattern and is quite similar to 
// Longest Substring with same Letters after Replacement.The only difference is that,
//  in the problem, we only have two characters(1s and 0s) in the input arrays.

// Following a similar approach, we’ll iterate through the array to add one number 
// at a time in the window. We’ll also keep track of the maximum number of repeating
// 1s in the current window(let’s call it maxOnesCount).
// So at any time, we know that we can have a window with 
// 1s repeating maxOnesCount time, so we should try to replace the remaining 0s.
// If we have more than ‘k’ remaining 0s, 
// we should shrink the window as we are not allowed to replace more than ‘k’ 0s.

function length_of_longest_substring(arr, k) {
    let windowStart = 0,
      maxLength = 0,
        maxOnesCount = 0;
    
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      if (arr[windowEnd] === 1) {
        maxOnesCount += 1;
      }
      // current window size is from windowStart to windowEnd, overall we have a maximum
      // of 1s repeating a maximum of 'maxOnesCount' times, this means that we can have a
      //  window with 'maxOnesCount' 1s and the remaining are 0s which should replace
      // with 1s. Now, if the remaining 0s are more than 'k', it is the time to shrink
      // the window as we are not allowed to replace more than 'k' Os.
      if (windowEnd - windowStart + 1 - maxOnesCount > k) {
        if (arr[windowStart] === 1) {
          maxOnesCount -= 1;
        }
        windowStart += 1;
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

//sheeeeeesh

 console.log(
   "Length Of Longest Substring: " +
     length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)
 );
 console.log(
   "Length Of Longest Substring: " +
     length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
 );