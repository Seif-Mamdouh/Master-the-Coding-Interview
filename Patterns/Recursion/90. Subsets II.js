var subsetsWithDup = function (nums) {
  let result = [];
  let n = nums.length;

  let subSetGenerator = function (start, currSubSet) {
    result.push(currSubSet);

    for (let i = start; i < n; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      const updatedSubSet = currSubSet.concat(nums[i]);
      subSetGenerator(i + 1, updatedSubSet);
    }
  };

  nums.sort((a, b) => a - b);
  subSetGenerator(0, []);
  return result;
};
