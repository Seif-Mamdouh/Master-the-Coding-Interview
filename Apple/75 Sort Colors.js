var sortColors = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let i = 0;

  while (i <= high) {
    if (nums[i] === 0) {
      [nums[i], nums[low]] = [nums[low], nums[i]];
      i++;
      low++;
    } else if (nums[i] === 1) {
      i++;
    } else {
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--;
    }
  }

  return nums;
};
