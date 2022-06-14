// 49. Group Anagrams
// Medium

// 9265

// 316

// Add to List

// Share
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = function (strs) {
  let groups = {};
  strs.forEach((str) => {
    const sortedStr = str.split("").sort().join("");
    if (groups[sortedStr]) {
      groups[sortedStr].push(str);
    } else {
      groups[sortedStr] = [str];
    }
  });

  return Object.values(groups);
};

//damn


const groupAnagrams = function (strs) {
  let words = {};
  let collectedWords = [];

  //iterate through words
  for (let str of strs) {
    //words hash to find and store arrays of words

    //sorts the letters
    let letters = str.split("").sort().join("");

    //create a hash key-value pair of the sorted letters of the word if it doesn't exist.
    words[letters] = words[letters] || [];

    //add word to value of the key which matches its letters
    words[letters].push(str);
  }

  //push these arrrays into the collectedwords array

  //time to iterate through words hash keys
  for (let key in words) {
    collectedWords.push(words[key]);
  }

  return collectedWords;
};