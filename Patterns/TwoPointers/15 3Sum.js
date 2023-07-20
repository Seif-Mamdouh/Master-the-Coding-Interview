// 15. 3Sum

// Share
// Given an integer array arr, return all the triplets [arr[i], arr[j], arr[k]] such that i != j, i != k, and j != k, and arr[i] + arr[j] + arr[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: arr = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: arr = []
// Output: []
// Example 3:

// Input: arr = [0]
// Output: []



var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let tripletss = [];
  var twoSum = (nums, rootIndx, tripletss) => {
    let i = rootIndx + 1;
    let j = nums.length - 1;

    while (i < j) {
      let curSum = nums[rootIndx] + nums[i] + nums[j];
      if (curSum === 0) {
        tripletss.push([nums[rootIndx], nums[i], nums[j]]);
        while (nums[i + 1] === nums[i]) i++;
        while (nums[j - 1] === nums[j]) j--;
        i++;
        j--;
      } else if (curSum < 0) {
        i++;
      } else {
        j--;
      }
    }
  };

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      twoSum(nums, i, tripletss);
    }
  }

  return tripletss;
};


// The twoSum function is called for each element in the sorted nums array, with i as the root index. The goal is to find all unique triplets whose sum is zero. To avoid duplicates, we need to ensure that we only consider distinct elements as the root index.

// The nums array is sorted in ascending order at the beginning of the threeSum function using nums.sort((a, b) => a - b). Sorting the array ensures that duplicate elements are adjacent to each other.

// The condition i === 0 checks if i is the first element (index 0) of the nums array. If it is, then this element will be considered as a new distinct element, and the twoSum function will be called to find unique triplets.

// The condition nums[i] > nums[i - 1] checks if the current element (nums[i]) is greater than the previous element (nums[i - 1]). If it is, then this current element is also distinct, and the twoSum function will be called to find unique triplets.

// If either of the conditions evaluates to true, the twoSum function is called with the current index i as the root index to find all unique triplets starting from that root index. Otherwise, the function does not process the current element as the root index to avoid duplicates.




function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < arr.length; i++){
    //skip dupilactes
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    search_pair(arr, -arr[i], i + 1, triplets);
  }
  return triplets;
}

function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target_sum) {
      //found triplets
      triplets.push([-target_sum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left + 1]) left++;
      while (left < right && arr[right] === arr[right - 1]) right -= 1;
    } else if (target_sum > currentSum) {
      left += 1; //need a pair with bigger a sum
    } else {
      right -= 1; //need a pair with a smaller sum;
    }
  }
}



console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
//console.log(search_triplets([-5, 2, -1, -2, 3]));




/*
This problem follows the Two Pointers pattern and shares similarities with Pair 
with Target Sum. A couple of differences are that the input array is not sorted and 
instead of a pair we need to find triplets with a target sum of zero.

To follow a similar approach, first, we will sort the array and then iterate through 
it taking one number at a time. Let’s say during our iteration we are at number ‘X’, 
so we need to find ‘Y’ and ‘Z’ such that X + Y + Z == 0X+Y+Z==0. At this stage, 
our problem translates into finding 
a pair whose sum is equal to “−X” (as from the above equation Y + Z == -X  Y+Z== −X).
*/








var threeSum = function (array) {
  array.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] != array[i - 1]) {
      // making sure our solution set does not contain duplicate triplets
      let left = i + 1;
      let right = array.length - 1;

      while (left < right) {
        const currentSum = array[i] + array[left] + array[right];
        if (currentSum === 0) {
          triplets.push([array[i], array[left], array[right]]);
          while (array[left] == array[left + 1]) left++;
          while (array[right] == array[right - 1]) right--; // making sure our solution set does not contain duplicate triplets
          left++;
          right--;
        } else if (currentSum < 0) {
          left++;
        } else if (currentSum > 0) {
          right--;
        }
      }
    }
  }
  return triplets;
};


var threeSum = function (arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < arr.length - 2; i++){
    if (arr[i] != arr[i - 1]){
      let j = i + 1;
      let k = arr.length - 1; 

      while (j < k) {
        const sum = arr[i] + arr[j] + arr[k];

        if (sum == 0) {
          triplets.push(arr[i], arr[j], arr[k]); 
          while (arr[j] == arr[j + 1]) j++; 
          while (arr[k] == arr[k - 1]) k--;
          j++;
          k--;

        } else if (sum < 0) {
          j++;
        } else if (sum > 0) {
          k--;
        }
      }
    }
  }
  return triplets;
};




// function search_triplets(arr) {
//   arr.sort((a, b) => a - b);
//   console.log(arr);
//   const triplets = [];
//   for (i = 0; i < arr.length; i++) {
//     // skip same element to avoid duplicate triplets
//     if (i > 0 && arr[i] === arr[i - 1]) {
//       continue;
//     }
//     search_pair(arr, -arr[i], i + 1, triplets);
//   }

//   return triplets;
// }

// function search_pair(arr, target_sum, left, triplets) {
//   let right = arr.length - 1;
//   while (left < right) {
//     const currentSum = arr[left] + arr[right];
//     if (currentSum === target_sum) {
//       // found the triplet
//       triplets.push([-target_sum, arr[left], arr[right]]);
//       console.log(triplets)
//       left += 1;
//       right -= 1;
//       while (left < right && arr[left] === arr[left - 1]) {
//         left += 1; // skip same element to avoid duplicate triplets
//       }
//       while (left < right && arr[right] === arr[right + 1]) {
//         right -= 1; // skip same element to avoid duplicate triplets
//       }
//     } else if (target_sum > currentSum) {
//       left += 1; // we need a pair with a bigger sum
//     } else {
//       right -= 1; // we need a pair with a smaller sum
//     }
//   }
// }
