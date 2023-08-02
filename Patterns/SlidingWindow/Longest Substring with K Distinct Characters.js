// LC Premuim 

// But I finesseed ;)

// Longest Substring with K Distinct Characters (medium)

// Problem Statement

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

// Example 1:

// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
// Example 2:

// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".
// Example 3:

// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

//First, we will insert characters from the beginning of the string until we have K 
//distinct characters in the HashMap.
//These characters will constitute our sliding window. 
//We are asked to find the longest such window having no more than K distinct characters.
//We will remember the length of this window as the longest window so far.

// After this, we will keep adding one character in the 
//sliding window(i.e., slide the window ahead) in a stepwise fashion.

//In each step, we will try to shrink the window from the beginning 
//if the count of distinct characters in the HashMap is larger than K. 
//We will shrink the window until we have no more than K distinct characters in the HashMap.
//This is needed as we intend to find the longest window.

//While shrinking, we’ll decrement the character’s frequency 
//going out of the window and remove it from the HashMap if its frequency becomes zero.

// At the end of each step, we’ll check if the current window length is the longest so far,
// and if so, remember its length.


//answer 

var lengthOfLongestSubstringKDistinct = function (s, k) {
  let result = 0;
  let windowStart = 0;
  let charFrequency = {};

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;

    // Shrink the window until there are at most k distinct characters
    while (Object.keys(charFrequency).length > k) {
      const leftChar = s[windowStart];
      charFrequency[leftChar]--;

      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }

      windowStart++;
    }

    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result;
};

console.log(
  `Length of the longest substring: ` +
    lengthOfLongestSubstringKDistinct("araaci", 2)
);


function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
        charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in
    // the char_frequency
      while (Object.keys(charFrequency).length > k) {
          const leftChar = str[windowStart];
          charFrequency[leftChar] -= 1;
          // console.log(leftChar);

        if (charFrequency[leftChar] === 0) {
          delete charFrequency[leftChar];
        }
        windowStart += 1; // shrink the window
        console.log(str[windowStart] += 1);
        
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

// console.log(
//   `Length of the longest substring: ` +
//     longest_substring_with_k_distinct("arabaci", 2)
// );
// console.log(
//   `Length of the longest substring: ` +
//     longest_substring_with_k_distinct("araaci", 1)
// );
// console.log(
//   `Length of the longest substring: ` +
//     longest_substring_with_k_distinct("cbbebi", 3)
// );

