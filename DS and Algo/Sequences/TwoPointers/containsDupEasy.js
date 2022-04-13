217. Contains Duplicate
Easy

Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

 

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

// compleeted in 7 mins. 

var containsDuplicate = function () {
    
    let i = 0; 
    let j = nums.length - 1; 

    if (nums.length < 2 || nums.length === 0) return false;

    while (i <= j) {
        
        if (nums[i] === nums[j]) return true;

        else {
            i++;
            j--; 
        }
    }

    return false;
}
