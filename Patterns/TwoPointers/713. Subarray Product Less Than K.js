var numSubarrayProductLessThanK = function find_subarrays(nums, target) {

    if(target <= 1){
        return 0;
    }
    
    let windowStart = 0;
    let windowProd = 1;
    let result = 0;

    for(windowEnd = 0; windowEnd < nums.length; windowEnd++){
        windowProd *= nums[windowEnd];

        while(windowProd >= target){
            windowProd /= nums[windowStart];
            windowStart++;
        } 

        result += windowEnd - windowStart + 1;
    }

    return result
}


var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;

  let product = 1;
  let left = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (product >= k) {
      // Shrink the window from the left until the product is less than k.
      product /= nums[left];
      left++;
    }

    // Count the subarrays with a product less than k.
    count += right - left + 1;
  }

  return count;
};
