/* 
567. Permutation in String
Medium

6844

217

Add to List

Share
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/

//steps
/* 
1 - Create a HashMap to calculate the frequencies of all characters in the pattern.

2 - Iterate through the string, adding one character at a time in the sliding window.

3 - If the character being added matches a character in the HashMap, decrement its frequency
in the map. If the character frequency becomes zero, we got a complete match.

4 - If at any time, the number of characters matched is equal to the number of distinct characters
    in the pattern(i.e., total characters in the HashMap), we have gotten our required permutation.

5 - If the window size is greater than the length of the pattern, shrink the window to make 
it equal to the pattern’s size. At the same time, 
if the character going out was part of the pattern, put it back in the frequency HashMap

*/



function find_permutation(pattern, str) {
  let windowStart = 0;
  let charFreq = {};
  let matched = 0;

  // counting charcters in pattern string
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    if (!(char in charFreq)) {
      charFreq[char] = 0;
    }
    charFreq[char] += 1;
  }

  // counting charFreq in str string
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (rightChar in charFreq) {
      charFreq[rightChar] -= 1;

      if (charFreq[rightChar] === 0) {
        matched += 1;
      }
    }

    charCount = Object.keys(charFreq).length;

    if (matched === charCount) {
      return true;
    }

    if (windowEnd >= pattern.length - 1) {
      let leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFreq) {
        if (charFreq[leftChar] === 0) {
          matched -= 1;
        }

        charFreq[leftChar] += 1;
      }
    }
  }

  return false;
}

function find_permutation(str, pattern) {
    let windowStart = 0,
        charFrequency = {},
        matched = 0;
    
    //calculate the frequency of charcters in the pattern string
        for (i = 0; i < pattern.length; i++) {
          const chr = pattern[i];
          if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
          }
          charFrequency[chr] += 1;
        }
    
    
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            charFrequency[rightChar] -= 1;
            
            if (charFrequency[rightChar] == 0) {
                matched += 1;
            }
        }

        if (matched === Object.keys(charFrequency).length) {
            return true;
        }

        //shrink the window
        if (windowEnd >= pattern.length - 1) {
            const leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                charFrequency[leftChar] += 1;
            }
        }

    }
    
    return false;
    
}


console.log(`Permutation exist: ${find_permutation("oidbcaf", "abc")}`);
console.log(`Permutation exist: ${find_permutation("odicf", "dc")}`);
console.log(`Permutation exist: ${find_permutation("bcdxabcdy", "bcdyabcdx")}`);
console.log(`Permutation exist: ${find_permutation("aaacb", "abc")}`);