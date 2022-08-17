// 3. Longest Substring Without Repeating Characters
// Medium

// 25660

// 1113

// Add to List

// Share
// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// function non_repeat_substring(s) {
//   let windowStart = 0;
//   let charIndex = {};
//   let maxLength = 0;
    
//     for(let windowEnd = 0; windowEnd > s.length; windowEnd++){
//       const rightChar = s[windowEnd];
      
//       if (rightChar in charIndex) {
//         windowStart = Math.max(windowStart, charIndex[rightChar] + 1);
//       }
//       indexMap[rightChar] = windowEnd;

//       maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//     }
  
//   return maxLength;
// }

function non_repeat_substring(str) {
    let windowStart = 0,
        maxLength = 0,
        charIndexMap = {};

    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        // if the map already contains the 'rightChar', shrink the window from the beginning 
        // so that we have only one occurrence of 'rightChar'
        if (rightChar in charIndexMap) {
            // this is tricky; in the current window, we will not have any 'rightChar' after 
            // its previous index and if 'windowStart' is already ahead of the last index of 
            // 'rightChar', we'll keep 'windowStart'
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
        }
        // insert the 'rightChar' into the map
        charIndexMap[rightChar] = windowEnd;
        // remember the maximum length so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
// console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);





