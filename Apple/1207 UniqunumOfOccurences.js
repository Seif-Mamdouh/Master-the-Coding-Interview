// 1207. Unique Number of Occurrences
// company
// Amazon
// company
// Google
// company
// Apple
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true



var uniqueOccurrences = function (arr) {
  // set a hashmap to keep count of freq values
  let freq = new Map();

  for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  // store the freq in a set
  let freqSet = new Set(freq.values());

  return freq.size == freqSet.size;
};

// for...of loop iterates over the values of the array directly. It is commonly used when you only need to access the values and don't require the index or key.
// for...in loop iterates over the indices or keys of the array. It is useful when you need both the index/key and the corresponding value.
