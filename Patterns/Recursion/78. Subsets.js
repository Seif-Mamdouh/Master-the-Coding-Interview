var subsets = function (nums) {
  let result = [];

  let generateSubSets = function (start, subSet) {
    result.push(subSet);

    for (let i = start; i < nums.length; i++) {
      const updatedSubset = [...subSet, nums[i]];
      generateSubSets(i + 1, updatedSubset);
    }
  };

  generateSubSets(0, []);
  return result;
};
