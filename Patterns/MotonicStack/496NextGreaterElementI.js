var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const mapGreater = new Map();

  for (const num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      mapGreater.set(stack.pop(), num);
    }
    stack.push(num);
  }

  console.log(mapGreater);

  let result = [];
  for (const num of nums1) {
    result.push(mapGreater.get(num) || -1);
  }

  return result;
};
