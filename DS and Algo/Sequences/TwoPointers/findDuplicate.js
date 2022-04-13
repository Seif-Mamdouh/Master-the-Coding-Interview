// 287. Find the Duplicate Number
// Medium


// Share
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3


var findDuplicate = function(nums) {
    let hare = 0;
    let turtle = 0;
    
    while(true){
        hare = nums[nums[hare]]; 
        turtle = nums[turtle];
        if(hare === turtle){
            break;
        }
    }
    let turtle2 = 0; 
    while(true){
        turtle2 = nums[turtle2]; 
        turtle = nums[turtle]; 
        
        if(turtle2 === turtle){
            return turtle;
        }
    }


};


//insanely effiecent way to solve 
var findDuplicate = function(nums) {
  let n = nums.length;
  let arr = [];
  for(let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
  }
  for(let i = 0; i < nums.length; i++) {
    arr[nums[i]] = arr[nums[i]] + n;
  }
  for(let i = 0; i < nums.length; i++) {
    if(Math.floor(arr[i] / n) > 1) {
      return i;
    }
  }
};

//This might be tge fastest I have ever came up with an answer. 
//So I started with assgining two pointers at the start of the array
// hare is the fast and turtle is slow 
//hare will move tow indexes at the time and turtle will one index at the time
//if hare is ever equal to turtle break. 
//Now we have got the index, we need the number

//we created another pointer named turtle2
//both turtle and turtle2 will move at the same pace until turtle2 is equal the turtle index
//then we will return the number 