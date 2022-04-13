var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const middle = Math.floor((low + high) / 2);
    if (nums[middle] == target) return middle;

    // If the left side is ordered
    if (nums[low] <= nums[middle]) {
      // Number is in the left side
      if (target >= nums[low] && target < nums[middle]) {
        high = middle;
      }
      // Number is in the right side
      else {
        low = middle + 1;
      }
    }
    // Right side is ordered
    else {
      // Number is in the right side
      if (target > nums[middle] && target <= nums[high]) {
        low = middle + 1;
      }
      // Number is in the left side
      else {
        high = middle;
      }
    }
  }

  // Reached the final number; return it if it matches the target, else target was not found
  return nums[low] == target ? low : -1;
};
