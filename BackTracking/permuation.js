// 46. Permutations
// Medium

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]





function permute(nums) {
  let result = [];
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    //What slice does is return a shallow copy of the array. We need a copy because as we’re iterating, we don’t want to modify the input (nums) itself. So with this line of code we’re taking all the numbers, except the one we’re iterating with, and concatenating it together to make another array, and saving it into the variable remainingNums.
    const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
    //     At this point, we’ve taken one number of the nums element out, split out the remaining numbers. If we look at our steps, our algorithm says that at this point, we did one permutation

    // Here we’re saving into a variable called remainingNumsPermuted the result of running our function again, but only with the remainingNums instead of the complete original nums array
    const remainingNumsPermuted = permute(remainingNums);

    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      // Inside of this second for loop, we’ll need to have a permuted array. So let’s create a variable called permutedArray. How do we create a permuted array? Our algorithm said we took the current number we iterated with, and then added the other elements left over to that array.
      const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
      result.push(permutedArray);
    }
  }
  return result;
}

//Premutations is basically taking all numbers of the array and mixing them up
//they gotta in different order, cannopt be the same.
//In order to do that we have to:

// Take the first element of the array (1), and set it aside.
// Take the remaining elements (2, and 3) and make one permutation with the original order (1, 2, 3), and another one with the original remaining elements (2 , 3), but swapped (3, 2). So now we have two permutations: [1, 2, 3] and [1, 3, 2].
// Next, we should go back to that first step, where we took the 1 aside, but go up one element in the array, and set aside the 2.
// That leaves us with a (1, 3) left. Let’s do the same thing: one permutation with the original order of remaining elements [2, 1, 3], and one with the remaining elements swapped [2, 3, 1]. Now we have four permutations: [1, 2, 3], [1, 3, 2], [2, 1, 3] and [2, 3, 1]
// Finally, we go up again to step 1, but now with the last element of the array: 3.
// We take the remaining elements aside (1, 2) and do one permutation with that: [3, 1, 2], and one with the remaining elements swapped [3, 2, 1]. Now we have six permutations: [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2] and [3, 2, 1]. Because we have no more steps to go in that first part of our exercise, when we go through each element one by one, and leave the remaining elements aside, we return all six of our permutations in the form of an array.

// Note how we have to keep going back to step 1, going up our array, and doing a swap? That is recursion in action. We’re taking the problem, breaking it down, and repeating it over and over until we’ve iterated through all the steps.
