var findKthLargest = function (nums, k) {
    

}

var findKthLargest = function (nums, k) {
  let sorted = nums.sort((a, b) => a - b);

  let res = nums[sorted.length - k];

  return res;
};

// Time complexity: O(n log n)
// Space complexity: O(1)
//JS sort() uses quicksort, which has a time complexity of O(n log n)

