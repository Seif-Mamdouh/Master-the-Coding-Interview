// 78. Subsets
// Medium

// 11994

// 172

// Add to List

// Share
// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]


function find_subsets(nums) {

    const subsets = [];

    subsets.push([]);
    for (let i = 0; i < nums.length; i++){
        currentNumber = nums[i];
        const n = subsets.length;

        for (let j = 0; j < n; j++){
            const set1 = subsets[j].slice(0);
            set1.push(currentNumber);
            subsets.push(set1);
        }
    }
    return subsets;
}

// console.log("Here is the list of subsets: ");
// let result = find_subsets([1, 3]);
// result.forEach((subset) => {
//   console.log(subset);
// });

console.log("Here is the list of subsets: ");
result = find_subsets([1, 5, 3]);
result.forEach((subset) => {
  console.log(subset);
});



