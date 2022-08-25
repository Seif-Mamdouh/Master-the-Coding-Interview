// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true






var containsDuplicate = function(nums) {
    var list = [];
    for (var i= 0; i<nums.length; i++){
        for (var j = i + 1; j<nums.length; j++){
            if( nums[i] == nums[j]){
                return true;
            }
        }
    }
    return false;
};

//or 

var containsDuplicate = function(nums) {
    const map = {}
    for(const num of nums) {
        // If we have seen this num before return true
        if(map[num]) return true
        map[num] = true
    }
    return false
};

