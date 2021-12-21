// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

//Basically this is an array that has an bunch if integers
//The program we tryna build is traversing through an array, getting the product
//of every index excepot the one we are currently at
//if we are at [1,2,3]
//              ^ 
//then the output would be 2 * 3

var productExceptSelf = function(nums){
    let left = 1 
    let right = 1
    let product = [];
    let numss = nums.length
    
    for(let i = 0; i < numss; i++ ){
        product[i] = left; 
        left *= nums[i]; 
    }
    
    for(let i = numss -1; i > -1; i-- ){
        product[i] = right*product[i]; // left * right
        right *= nums[i];
    }
    
    return product;
}
