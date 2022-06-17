// 238. Product of Array Except Self
// Medium

// 12711

// 756

// Add to List

// Share
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

var productExceptSelf = function (nums) {
  let left = new Array(nums.length).fill(1);
  let right = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = right[i] * left[i];
  }

  return nums;
};





var topKFrequent = function (nums, k) {
  let counts = new Map();
  let buckets = [];
  for (let i = 0; i <= nums.length; i++) buckets.push([]);

  // count frequent of the elements
  for (let num of nums) {
    if (counts.has(num)) {
      counts.set(num, counts.get(num) + 1);
    } else {
      counts.set(num, 1);
    }
  }
  // put them into buckets by frequent
  for (let [key, value] of counts) {
    buckets[value].push(key);
  }
  // fetch the larget frequest bucket first, until reach k
  let ans = [];
  for (let i = buckets.length - 1; i > 0 && ans.length < k; i--) {
    if (buckets[i] !== null) ans.push(...buckets[i]);
  }
  return ans;
};

// get() method in JavaScript is used for returning a specific element among all the elements which are present in a map
// set() object lets you store unique values of any type
//Map() helps to store any data type as a key. a normal 
  //object can store strings data type as a key. Maps has also maintain insertion order.
  //objects have no insertion order. Everything is all over the place. 
// Set() is an interesting feature of JS. It only stores keys 


