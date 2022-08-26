// Dutch National Flag Problem (medium)


// Problem Statement

// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

// Example 1:

// Input: [1, 0, 2, 1, 0]
// Output: [0 0 1 1 2]
// Example 2:

// Input: [2, 2, 0, 1, 2, 0]
// Output: [0 0 1 2 2 2 ]

//DON"T DARE DUTCHES ME!!!!!!!!

// We can use a Two Pointers approach while iterating through the array.
// Let’s say the two pointers are called low and high 
// which are pointing to the first and the last element of the array respectively.
// So while iterating, we will move all 0s before 
// low and all 2s after high so that in the end, all 1s will be between low and high.


function dutch_flag_sort(arr) {
    // arr.sort((a, b) => a - b);
    let low = 0;
    let high = arr.length - 1;
    let i = 0;

    while (i <= high) {
        if (arr[i] === 0) {
            [arr[i], arr[low]] = [arr[low], arr[i]];
            i += 1;
            low += 1;
        } else if (arr[i] === 1) {
            i += 1;
        } else {
            [arr[i], arr[high]] = [arr[high], arr[i]]; // swap
      // decrement 'high' only, after the swap the number at index 'i' could be 0, 1,
      // or 2
      high -= 1;
        }
    }
}

let arr = [1, 0, 2, 1, 0];
dutch_flag_sort(arr);
console.log(arr);

arr = [2, 2, 0, 1, 2, 0];
dutch_flag_sort(arr);
console.log(arr);
