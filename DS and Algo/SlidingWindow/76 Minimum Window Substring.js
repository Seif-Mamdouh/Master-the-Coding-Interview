// 76. Minimum Window Substring
// Hard

// 11815

// 559

// Add to List

// Share
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

//answer 
// We will keep a running count of every matching instance of a character. 
// Whenever we have matched all the characters, we will try to shrink the window from the beginning, keeping track of the smallest substring that has all the matching characters. 
// We will stop the shrinking process as soon as we remove a matched character from the sliding window.One thing to note here is that we could have redundant matching characters,
//     e.g., we might have two ‘a’ in the sliding window when we only need one ‘a’. In that case, when we encounter the first ‘a’, 
//     we will simply shrink the window without decrementing the matched count.We will decrement the matched count when the second ‘a’ goes out of the window.


function find_substring(str, pattern) {
    let windowStart = 0,
        matched = 0,
        substrStart = 0,
        minLength = str.length + 1,
        charFrequency = {};

    for (i = 0; i < pattern.length; i++) {
        const chr = pattern[i];
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }

    // try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] >= 0) { // Count every matching of a character
                matched += 1;
            }
        }

        // Shrink the window if we can, finish as soon as we remove a matched character
        while (matched === pattern.length) {
            if (minLength > windowEnd - windowStart + 1) {
                minLength = windowEnd - windowStart + 1;
                substrStart = windowStart;
            }

            const leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                // Note that we could have redundant matching characters, therefore we'll 
                // decrement the matched count only when a useful occurrence of a matched 
                // character is going out of the window
                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                charFrequency[leftChar] += 1;
            }
        }
    }

    if (minLength > str.length) {
        return '';
    }
    return str.substring(substrStart, substrStart + minLength);
}




console.log(find_substring("aabdec", "abc"));
console.log(find_substring("aabdec", "abac"));
console.log(find_substring("abdbca", "abc"));
console.log(find_substring("adcad", "abc"));