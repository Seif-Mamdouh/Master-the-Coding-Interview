// 242. Valid Anagram
// Easy

// 4847

// 212

// Add to List

// Share
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const mapS = {};

  for (let char of s) {
    mapS[char] = (mapS[char] || 0) + 1;
  }

  for (let char of t) {
    if (!mapS[char]) {
      return false;
    }

    mapS[char]--;
  }

  return true;
};
