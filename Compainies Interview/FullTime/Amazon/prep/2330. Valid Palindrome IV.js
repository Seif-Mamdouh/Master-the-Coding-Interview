// You are given a 0-indexed string s consisting of only lowercase English letters. In one operation, you can change any character of s to any other character.

// Return true if you can make s a palindrome after performing exactly one or two operations, or return false otherwise.

 

// Example 1:

// Input: s = "abcdba"
// Output: true
// Explanation: One way to make s a palindrome using 1 operation is:
// - Change s[2] to 'd'. Now, s = "abddba".
// One operation could be performed to make s a palindrome so return true.
// Example 2:

// Input: s = "aa"
// Output: true
// Explanation: One way to make s a palindrome using 2 operations is:
// - Change s[0] to 'b'. Now, s = "ba".
// - Change s[1] to 'b'. Now, s = "bb".
// Two operations could be performed to make s a palindrome so return true.
// Example 3:

// Input: s = "abcdef"
// Output: false
// Explanation: It is not possible to make s a palindrome using one or two operations so return false.


var makePalindrome = function (s) {
  let s_arr = s.split("");

  let left = 0;
  let right = s.length - 1;

  let count = 0;

  while (left <= right) {
    if (s_arr[left] === s_arr[right]) {
      left++;
      right--;
    } else {
      if (count >= 2) {
        return false;
      }
      s_arr[left] = s_arr[right];
      count++;
      left++;
      right--;
    }
  }

  return true;
};