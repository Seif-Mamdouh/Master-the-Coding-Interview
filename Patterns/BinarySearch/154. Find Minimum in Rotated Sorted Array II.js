// The Trick here is to check if the middle pointer is greater than the right pointer,
// then we know that the minimum is on the right side of the middle pointer
// otherwise the min is on the left side of the middle pointer
//O(log n)
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      // Handle duplicates by decrementing 'right'
      right--;
    }
  }

  return nums[left];
};
