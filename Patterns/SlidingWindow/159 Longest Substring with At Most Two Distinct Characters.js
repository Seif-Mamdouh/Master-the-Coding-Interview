// 159. Longest Substring with At Most Two Distinct Characters
// LC premium

// Medium
// Topics
// Companies
// Given a string s, return the length of the longest 
// substring
//  that contains at most two distinct characters.

 

// Example 1:

// Input: s = "eceba"
// Output: 3
// Explanation: The substring is "ece" which its length is 3.
// Example 2:

// Input: s = "ccaabbb"
// Output: 5
// Explanation: The substring is "aabbb" which its length is 5.
 

// Constraints:

// 1 <= s.length <= 105
// s consists of English letters.



var lengthOfLongestSubstringTwoDistinct = function (s) {
  let windowStart = 0;
  let char = {};

  let result = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];

    if (!(rightChar in char)) {
      char[rightChar] = 0;
    }

    char[rightChar] += 1;

    while (Object.keys(char).length > 2) {
      let leftChar = s[windowStart];
      char[leftChar] -= 1;

      if (char[leftChar] === 0) {
        delete char[leftChar];
      }
      windowStart += 1;
    }

    // Update the result with the maximum substring length
    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result;
};
