/*
90. Subsets II
Medium

6559

184

Add to List

Share
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
*/

// function find_subsets(nums) {
//   // sort the numbers to handle duplicates
//   nums.sort((a, b) => a - b);
//   const subsets = [];
//   subsets.push([]);
//   let startIndex = 0,
//     endIndex = 0;
//   for (i = 0; i < nums.length; i++) {
//     startIndex = 0;
//     // if current and the previous elements are same, create new subsets only from the
//     // subsets added in the previous step
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       startIndex = endIndex + 1;
//     }
//     endIndex = subsets.length - 1;
//     for (j = startIndex; j < endIndex + 1; j++) {
//       // create a new subset from the existing subset and add the current element to it
//       const set1 = subsets[j].slice(0);
//       set1.push(nums[i]);
//       subsets.push(set1);
//     }
//   }
//   return subsets;
// }


function find_subsets(nums) {
    nums.sort((a, b) => a - b);
    const subsets = [];
    let startIndex = 0, endIndex = 0;
    subsets.push([]);

    for (let i = 0; i < nums.length; i++) {
        startIndex = 0;

        if (i > 0 && nums[i] === nums[i - 1]) {
            startIndex = endIndex + 1;
        }

        endIndex = subsets.length - 1;

        for (j = startIndex; j < endIndex + 1; j++) {
            const set1 = subsets[j].slice(0);
            set1.push(nums[i]);
            subsets.push(set1);
        }
    }

    return subsets;
}

console.log("Here is the list of subsets: ");
let result = find_subsets([1, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});

// console.log("Here is the list of subsets: ");
// result = find_subsets([1, 5, 3, 3]);
// result.forEach((subset) => {
//   console.log(subset);
// });