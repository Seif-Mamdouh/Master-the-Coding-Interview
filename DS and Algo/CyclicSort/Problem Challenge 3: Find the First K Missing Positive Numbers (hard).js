/*
Problem Challenge 3: Find the First K Missing Positive Numbers (hard)


Problem Statement

Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.

Example 1:

Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.
Example 2:

Input: [2, 3, 4], k=3
Output: [1, 5, 6]
Explanation: The smallest missing positive numbers are 1, 5 and 6.
Example 3:

Input: [-2, -3, 4], k=2
Output: [1, 2]
Explanation: The smallest missing positive numbers are 1 and 2.

*/


//answer 

function find_first_k_missing_positive(nums, k) {

    let i = 0;
    let n = nums.length;

}


console.log(find_first_k_missing_positive([3, -1, 4, 5, 5], 3));
// console.log(find_first_k_missing_positive([2, 3, 4], 3));
// console.log(find_first_k_missing_positive([-2, -3, 4], 2));