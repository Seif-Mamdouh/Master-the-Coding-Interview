// 167. Two Sum II - Input Array Is Sorted
// Medium

// 5579

// 947

// Add to List

// Share
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

 

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// Solutions

//normal two pointers
var twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    let result = []
    while(left < right){
        const curSum = nums[left] + nums[right]
        
        if(curSum === target){
            result.push(left + 1, right + 1)
        }

        if(curSum > target){
            right--
        } else {
            left ++
        }
    }    

    return result;
}

// Runtime
// 50 ms
// Beats
// 95.77%

// Memory
// 42.7 MB
// Beats
// 63.54%


//Hash Map
var twoSum = function (nums, target) {
    
    let m = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (m.has(target - nums[i])) {
            return [m.get(target - nums[i]), i + 1];
        }
        m.set(nums[i], i + 1);

    }
}