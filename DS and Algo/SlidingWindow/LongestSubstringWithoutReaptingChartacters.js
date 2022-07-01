3. Longest Substring Without Repeating Characters
Medium

25660

1113

Add to List

Share
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


var lengthOfLongestSubstring = function (s) {
    // Store counters for the the start of the window and the longest string's length
    var startOfWindow = 0,
        longestStringLength = 0;

    // Initialise a Map to store the characters of the current string
    var characterMap = new Map();

    // Loop through the provided string
    for (let i = 0; i < s.length; i++) {
        // Store the current character, and its position in the Map (saves repeatedly looking it up)
        let currentCharacter = s[i];
        let currentCharacterPositionInMap = characterMap.get(currentCharacter);

        // Check if current character exists in the Map, and was found within the current window
        if (currentCharacterPositionInMap >= startOfWindow) {
            // Move the current window to start after the first instance of the current character
            startOfWindow = currentCharacterPositionInMap + 1;
        }

        // Add the current character to the Map with its position in the string
        characterMap.set(currentCharacter, i);

        // Store the current string length if bigger than the existing record
        longestStringLength = Math.max(
            longestStringLength,
            i - startOfWindow + 1
        );
    }

    return longestStringLength;
};







var lengthOfLongestSubstring = function(s) {
    
    let maxLength = 0,
        left = 0,
        chars = new Set();

  for (let i = 0; i < s.length; i++) {
    while (chars.has(s[i])) {
      chars.delete(s[left]);
      left++;
    }

    chars.add(s[i]);
    maxLength = Math.max(maxLength, chars.size);
  }

  return maxLength;
};


// We can use the Sliding Window technique for this question. Sliding Window is good for analysing subsets within a data structure, to see which subset is the best. There are two approaches; fixed sized and dynamic. This solution uses the dynamic approach where the window is not a fixed size and can grow and shrink.
// 
// Sliding Window uses two pointers to define the boundary of the subset (this is the window). In this example left and i are the left and right pointers, respectively.
// 
// To solve the problem of finding the longest unique substring we use Set to store the characters. Before adding to the Set we first check if it already exists. If it does exist, we remove all the characters in the Set from the left (using our left pointer) until the duplicate character has been removed.
// maxLength tracks the largest substring, after each iteration we set maxLength to itself or the size of the Set which ever is largest.
// This interesting grshb