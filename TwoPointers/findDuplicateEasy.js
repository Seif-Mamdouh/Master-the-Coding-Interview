217. Contains Duplicate
Easy

Add to List

Share
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


//answer set 

//set is a JS maethod that stores unique object. 
var containsDuplicate = function (nums) {
    //return a set of Nums Array less than the origonal  the method will return true or false. 
    return new Set(nums).size < nums.length;
};

var containsDuplicate = function (nums) {
    //return the set of nums, if the size isn't equal to the length, the method will return true or false. 
    return (new Set(nums).size !== nums.length);    
};
