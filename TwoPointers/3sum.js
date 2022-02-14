// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Medium
 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []



var threeSum = function(nums) {
     
    let triplets = []; 
    let sort = nums.sort((a,b) => a -b);
    let length = sort.length;
    
    if(length < 3 || length === null){
        return triplets;
    } 
    
    
    for(let i = 0; i < length; i++){         
        let j = i + 1; 
        let k = nums.length - 1; 
        let sum = sort[i] + sort[j] + sort[k];
        
        while(j < k){
            if(sum === 0){
                triplets.push([sort[i], sort[j], sort[k]]); 
                k--;
            } else {
                j++;
            }
            sum = sort[i] + sort[j] + sort[k];
        }
    }
    
    return triplets;
    
   
};