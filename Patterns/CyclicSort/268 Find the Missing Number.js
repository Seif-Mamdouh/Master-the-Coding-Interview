/*268. Missing Number
Easy

7015

2949

Add to List

Share
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
*/

function find_missing_number(nums) {
  let i = 0;
    const n = nums.length;
    
    //sort the numbers according top the index
    while (i < n) {
        let j = nums[i];
        if (nums[i] < n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; //swap 
        } else {
            i += 1;
        }
    }

  // find the first number missing from its index, that will be our required number
    for (i = 0; i < n; i++){
        if (nums[i] !== i) {
            return i;
        }
        //console.log(i);
    }

    return n;
 
}





console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));

