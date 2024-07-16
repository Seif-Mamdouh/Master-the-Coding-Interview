// The developers working on a social media network app want to analyze user behavior.There are n event logs where userEventli] denotes the userld for the user that triggered the ith event.The team wants to analyze the subarrays of the logs which are consistent, that is, the frequency of the most frequent user in the subarray is equal to the frequency of the least frequent user in the whole array.Find the maximum length of consistent logs.
//     Note:
// • A subarray is a contiguous group of elements in an array.
//     seifmamdouh787
// Example
// Given n = 10, and userEvent = [1, 2, 1, 3, 4, 2, 4, 3, 3, 4]
// • The frequencies of 1 and 2 are 2.
// • The frequencies of 3 and 4 are 3.
// The minimum frequency in the array is 2.
// The longest valid subarray has 8 elements: [1, 2, 1, 3, 4, 2, 4, 3].
//     douh7878
// seifman
// • The frequencies of 1, 2, 3, and 4 are all 2.
// The frequency of the most common element in the subarray is 2, the same as the minimum frequency in the entire array.
//     all
// Hence, the maximum length of consistent logs is 8.
// ntial
// Function Description
// Complete the function findConsistentLogs in the editor below.
//     seifmamdoi
// findConsistentLogs has the following parameters: int userEvent[n]: the userlds present in the event logs
// Returns
// int the maximum length of consistent logs
