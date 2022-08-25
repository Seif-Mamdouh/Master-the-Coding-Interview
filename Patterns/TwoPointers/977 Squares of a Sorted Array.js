/*
977. Squares of a Sorted Array

Add to List

Share
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

*/

function make_squares(arr) {
    let n = arr.length;
    //new array to push results;
    let result = new Array(n).fill(0);
    let highSqaure = n - 1;
    //intilizing the two pointers
    let right = n - 1, left = 0;

    while (left <= right) {
        leftSqaure = arr[left] * arr[left];
        rightSqaure = arr[right] * arr[right];
        if (leftSqaure > rightSqaure) {
            result[highSqaure] = leftSqaure;
            left++;
        } else {
            result[highSqaure] = rightSqaure;
            right -= 1;
        }

        highSqaure -= 1;
    }

    return result;
}


console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);

/*
Runtime: 106 ms, faster than 95.23% of JavaScript online submissions for Squares of a Sorted Array.
Memory Usage: 47.8 MB, less than 98.70% of JavaScript online submissions for Squares of a Sorted Array.
*/