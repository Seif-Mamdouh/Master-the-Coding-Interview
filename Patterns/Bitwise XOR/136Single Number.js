// 136 Single Number
// Easy

// 11493

// 437

// Add to List

// Share
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1


function find_single_number(arr) {
    const n = arr.length;

    let x = 0;;
    for (let i = 0; i <= n; i++){
        x ^= arr[i];
    }

    return x;
}






console.log(`Single Number is: ${find_single_number([1, 4, 2, 1, 3, 2, 3])}`);


// console.log(`Missing number is: ${find_missing_number([1, 2, 3, 4])}`);
