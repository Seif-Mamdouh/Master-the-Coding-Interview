// Given an integer array nums of length n and an integer target, 
// find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

//Example 2:

Input: nums = [0,0,0], target = 1
Output: 0


// So the whole point over here is to optimzie the solution. 
// We did the the three loop solution which is a O^3
// Well that's not that good. What what we can do is to decrease it down to O^2
// The question is how? 

// Well in that case, we can use three pointers
// and sliding window. 
// Elabarote Seif
// Okay I gotchu. 
// Well first of all let's sort the array, it will be easier to find the solution. 

[-1, 2, 1, -4]

sorted = [-4, -1, 1, 2][
  //we will assign three different pointers to the array
  // The trick here is that only two will move and one will become stable
    
    [-4, -1, 1, 2]
      i   k     j

    //if you add up all three it will be equal to the target. 
    // so i and k keep incrementing

      [-4, -1, 1, 2]
            i  k  j

//    i + j + k are equal to the target! 







// Two pointer solutions.
var threeSumClosest = function(nums, target) {
    let i, left, right, current, sum;
    let result = Number.MAX_SAFE_INTEGER;
    // tampered original
    nums.sort((a, b) => a - b);
    // two pointers
    for(i = 0; i < nums.length; i++){
        current = nums[i];
        left = i+1;
        right = nums.length-1;
        while(left < right){
            sum = current + nums[left] + nums[right];
            // get the closest sum
            if(Math.abs(target - sum) < Math.abs(target - result)){
                result = sum;
            }
            if(sum < target){
                left++;
            }else if(sum > target){
                right--;
            }else{
                return sum;
            }
        }
    }
    return result;
};





// Brute Force Solution
var threeSumClosest = function(nums, target) {
nums.sort((a, b) => a - b);
    
  let sum = null;
    
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const summ = nums[i] + nums[j] + nums[k];
          
        if (sum === null) sum = summ;
          
        else if (Math.abs(summ - target)< Math.abs(sum - target)) sum = summ;
          
        else if (summ > sum) break;
      }
    }
  }
    return sum;
};
