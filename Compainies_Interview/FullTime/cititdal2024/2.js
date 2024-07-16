// A coding competition organized to hire software developers includes an interesting problem on Bitwise - OR.
// The goodness of a sequence is defined as the bitwise - OR of its elements.Given an array arr of length n, find all possible distinct values of goodness that can be obtained by choosing any strictly increasing subsequence of the array.Sort the return array in non - decreasing order.
//     Note: A subsequence is a sequence that can be derived from the given sequence by deleting zero or more elements without changing the order of the remaining elements.
//         Example
// Consider n = 4, arr = [4, 2, 4, 11.
// The strictly increasing subsequences which can be chosen to have distinct goodness values are:
// • Empty subsequence; goodness = 0
// •[1]; goodness = 1
// •[2]; goodness = 2
// •[4]; goodness = 4
// •[2, 4]; goodness = 6
// There are no other strictly increasing subsequences that yield a different goodness value.So, the answer is[0, 1, 2, 4, 6], which is sorted in non - decreasing order.
// Function Description
// Complete the function getDistinctGoodnessValues in the editor below.getDistinctGoodness Values has the following parameter:
//     int arr[n]: an array of integers
// Returns
// int]: all possible distinct values of goodness
