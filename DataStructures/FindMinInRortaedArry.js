//153. Find Minimum in Rotated Sorted Array
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

 

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 


function findMin(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }
  return nums[l];
}



var findMin = function(nums) {
    //if length of array is 1 return the index of the number
    if(nums.length == 1 ){
        return nums[0];
    }
    
    //if the length of the array is 0, return nothing
    if(nums.length == 0){
        return -1;
    }
    
    assgined variables
    let left = 0; 
    let right = nums.length - 1;
    
    //as long the left is smaller than the right, keep looping through the array
    while(left < right){
        //assign the magic the trick, the binary search formula
        let midpnt = left + (right - left) / 2; 

        //if the midpnt more than zero, if one midpnt is bigger than the one the right, return the midpnt as the min var
        if(midpnt > 0 && nums[midpnt] < nums[midpnt - 1]){
            return nums[midpnt];
        //otherwise left is less than or equal to the midpont and midpnt is more than the right
        //return the left index
        } else if (nums[left] <= nums[midpnt] && nums[midpnt] > nums[right]){
            left = midpnt + 1;
        }else {
            right - midpnt - 1; 
        }
        return nums[left];
    }
    
};


//My Biggest fear: 
//Binary Search
//Not my cup of tea
//I can use a linear approach and go through it one by one
//However that can be really ineffiecent

//The question is how to binary search and find the minimum? 
//The way binary search works is that it cuts through the middle and compares 
//if the number in the middle is bigger than the number we are looking for, delete the numbers and move right
//However in this question, since it's rotatly sorted the trick here is when it reaches the middle it's gonna have to check 
//if there are number on both sides of the array that are smaller than the number on te middle



