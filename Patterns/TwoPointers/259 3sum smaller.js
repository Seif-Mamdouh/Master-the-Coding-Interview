/*
259. 3Sum Smaller
Medium


Given an array of n integers nums and an integer target, 
find the number of index triplets i, j, k with 0 <= i < j < k < n that 
satisfy the condition nums[i] + nums[j] + nums[k] < target.

 

Example 1:

Input: nums = [-2,0,1,3], target = 2
Output: 2
Explanation: Because there are two triplets which sums are less than 2:
[-2,0,1]
[-2,0,3]
Example 2:

Input: nums = [], target = 0
Output: 0
Example 3:

Input: nums = [0], target = 0
Output: 0
*/

// function triplet_with_smaller_sum(arr, target) {
//     arr.sort((a, b) => a - b);
//     let count = 0;
//     for (let i = 0; i < arr.length - 2; i++) {
//         count += search_pair(arr, target - arr[i], i);
//     }

//     return count;

// }

// function search_pair(arr, target_sum, first) {
//     let count = 0;
//     let left = first + 1;
//     right = arr.length - 1;
//     if (arr[left] + arr[right] < target_sum) {
//         //found the triplet
//         //since arr[right] is grerater than the left one
//         //this means that any number between left and right is less than target sum
//         count += right - left;
//         left += 1;
//     } else {
//         right += 1;
//     }

//     return count;
// }


// At this stage, our problem translates into finding a pair whose sum is less than 
// “target - Xtarget − X” (as from the above equation Y + Z == target - X 
//Y + Z == target−X).

// console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
// console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));


//Problem: 
// Write a function to return the list of all such triplets instead of the count.


var threeSumSmaller = function (nums, target) {
  let result = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let k = i + 1;
    let j = nums.length - 1;

    while (k < j) {
      const curSum = nums[i] + nums[k] + nums[j];
      if (curSum < target) {
        // If the current triplet's sum is less than the target,
        // then all the triplets formed by nums[i], nums[k], and any nums[x]
        // where k < x <= j will also have a sum less than the target.
        // So, increment the result count by (j - k).
        result += j - k;
        k++;
      } else {
        j--;
      }
    }
  }

  return result;
};





function triplet_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
    let triplets = [];
    for (let i = 0; i < arr.length - 2; i++) {
        search_pair(arr, target - arr[i], i, triplets);
  }

  return triplets;
}

function search_pair(arr, target_sum, first, triplets) {
    let left = first + 1;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] < target_sum) {
          // found the triplet
          // since arr[right] >= arr[left], therefore, we can replace arr[right] by any
          // number between left and right to get a sum less than the target sum
                  for (i = right; i > left; i--) {
                    triplets.push([arr[first], arr[left], arr[i]]);
                  }
            left += 1;
        } else {
            right -= 1;
        }
    }
}



console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
// console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));