// 33. Search in Rotated Sorted Array
// Medium

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1


var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[left] <= nums[mid]) {
            if (target < nums[mid] && nums[left] <= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && nums[right] >= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};


var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[left] <= nums[mid]){  //left side sorted
            if(nums[mid] > target && nums[left] <= target){
                right = mid - 1;
            } else {
                left = mid + 1
            }
        } else { //right side sorted
            if(nums[mid] < target && nums[right] >= target){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};




var search = function (nums, target) {

    let high = nums.length - 1;
    let low = 0;
    let mid = Math.floor(nums.length/2);
    let answer = 0;

    while(mid = true){

        if(mid < target){
            answer = low ++;
        }
        else if(mid < target){
           answer = high --;
        }
        else if(mid > target){
            answer = high --;
        }
        else if (mid === target){
            answer = mid;
        }
        else {
            return -1;
        }
    }

    return answer;

};


var search = function(nums, target) {

    let high = nums.length - 1;
    let low = 0;
    // let mid = Math.floor((low+high)/2);
    // let answer = 0;
    
    while(low < high){ 
        let mid = Math.floor((low+high)/2);
        if(nums[mid] === target) return mid;
            
        //if the left side is sorted
        if(nums[low] <= mid[mid]){
            //target is on the left
            if(target >= nums[low] && target < nums[mid]){
                high = mid;
            }
            
            else{
                //target index is on the right
                low = mid + 1;
            }
        }

       else {
      // Number is in the right side
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
      }
      // Number is in the left side
      else {
        high = mid;
      }
    }
  }

var search = function(nums, target) {
    let low = 0, high = nums.length-1;
    
    while(low < high){
      let mid = Math.floor(nums.length/2)
      //return the mid = to target return mid
      if(nums[mid]===target) return mid
      
      //if the elements are is less than the number on the left
      if (nums[mid] < nums[high]) {
          //if the target is more than mid and target is less than or equal the low index, increment the 
            if (target > nums[mid] && target <= nums[low]) {
                low = mid + 1;
            } else {
                continue;
            }
        } 
        
        else {
//             if the target is more than the mid or target is less than low
            if (target > nums[mid] || target < nums[low]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
    }
    
    return low;
};
        
        
        
        if(mid < target){
            low ++;
            answer = nums[low];
        } 
        else if(mid < target || mid > target){
            high --;
            answer = nums[high];
        }
        else if (mid === target){
            return mid;
            answer = nums[mid];
        }
        else {
            return -1;
        }
    }
    
    // Reached the final number; return it if it matches the target, else target was not found
  return nums[low] == target ? low : -1;
       
    
};



// one liner
var search = function(nums, target) {
   return (nums.indexOf(target));
};

    
    
    
     
        
//    < less than 
//    > more than 

// sortedArray = [0,1,2,3,4] target = 3
// if mid is less than target move right

// roatatedArray = [4,0,1,2,3] target = 3
// if mid is less than the target move right 

// roatatedArray = [3,4,0,1,2]  target = 3
//  if mid is less than target move left 

// roatatedArray = [2,3,4,0,1]  target = 3
//  if mid is more than the target left

//  roatatedArray = [1,2,3,4,0]   target = 3
//  if mid is equal to the target return mid




    
//     highh = [2,3]
//     loww = [0,1]
    
//     [1,2,3,4,5]
//     mid = 3
//     if mid index is lower than target move right
//     if mid index is hiugher than the target move left
    
